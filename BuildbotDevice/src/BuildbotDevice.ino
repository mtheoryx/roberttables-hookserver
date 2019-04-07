/*
 * Project BuildbotDevice
 * Description:
 * Author:
 * Date:
 */

#include <FastLED.h>
FASTLED_USING_NAMESPACE;
#define NUM_LEDS 3
#define DATA_PIN 6

bool TURNED_ON;          //Is the led on
unsigned int COLOR_NAME; //What color are we showing, rebbecca purple by default

CRGB leds[NUM_LEDS];

void setup()
{
  // LED registry requirements
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);

  // Particle led on/off
  Particle.function("led", ledToggle);

  //Particle set led color
  Particle.function("setColor", ledColor);

  // Initialize State
  TURNED_ON = false;
}

// loop() runs over and over again, as quickly as it can execute.
void loop()
{
  // The core of your code will likely live here.
  for (int dot = 0; dot < NUM_LEDS; dot++)
  {
    // leds[dot] = 0xFFFFFF;
    leds[dot] = COLOR_NAME;
    FastLED.show();
    delay(500);
    // clear this led for the next time around the loop
    leds[dot] = 0x000000;
    delay(250);
  }
}
