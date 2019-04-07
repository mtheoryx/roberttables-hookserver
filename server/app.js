const express = require('express');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(express.json());

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Enable compression
app.use(compression());

// // Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/healthcheck', (_, res) => res.sendStatus(200));

// @TODO: Remove mock data
const mock = {
  action: 'edited',
  issue: {
    url: 'https://api.github.com/repos/Codertocat/Hello-World/issues/2',
    repository_url: 'https://api.github.com/repos/Codertocat/Hello-World',
    labels_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/2/labels{/name}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/2/comments',
    events_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/2/events',
    html_url: 'https://github.com/Codertocat/Hello-World/issues/2',
    id: 327883527,
    node_id: 'MDU6SXNzdWUzMjc4ODM1Mjc=',
    number: 2,
    title: 'Spelling error in the README file',
    user: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false
    },
    labels: [
      {
        id: 949737505,
        node_id: 'MDU6TGFiZWw5NDk3Mzc1MDU=',
        url: 'https://api.github.com/repos/Codertocat/Hello-World/labels/bug',
        name: 'bug',
        color: 'd73a4a',
        default: true
      }
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2018-05-30T20:18:32Z',
    updated_at: '2018-05-30T20:18:32Z',
    closed_at: null,
    author_association: 'OWNER',
    body: "It looks like you accidently spelled 'commit' with two 't's."
  },
  changes: {},
  repository: {
    id: 135493233,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMzU0OTMyMzM=',
    name: 'Hello-World',
    full_name: 'Codertocat/Hello-World',
    owner: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/Codertocat/Hello-World',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/Codertocat/Hello-World',
    forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
    keys_url:
      'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
    hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
    issue_events_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
    events_url: 'https://api.github.com/repos/Codertocat/Hello-World/events',
    assignees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
    tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
    blobs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/Codertocat/Hello-World/languages',
    stargazers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
    contributors_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contributors',
    subscribers_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
    subscription_url:
      'https://api.github.com/repos/Codertocat/Hello-World/subscription',
    commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/Codertocat/Hello-World/merges',
    archive_url:
      'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/Codertocat/Hello-World/downloads',
    issues_url:
      'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
    releases_url:
      'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/Codertocat/Hello-World/deployments',
    created_at: '2018-05-30T20:18:04Z',
    updated_at: '2018-05-30T20:18:10Z',
    pushed_at: '2018-05-30T20:18:30Z',
    git_url: 'git://github.com/Codertocat/Hello-World.git',
    ssh_url: 'git@github.com:Codertocat/Hello-World.git',
    clone_url: 'https://github.com/Codertocat/Hello-World.git',
    svn_url: 'https://github.com/Codertocat/Hello-World',
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: null,
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: 'master'
  },
  sender: {
    login: 'Codertocat',
    id: 21031067,
    node_id: 'MDQ6VXNlcjIxMDMxMDY3',
    avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Codertocat',
    html_url: 'https://github.com/Codertocat',
    followers_url: 'https://api.github.com/users/Codertocat/followers',
    following_url:
      'https://api.github.com/users/Codertocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Codertocat/subscriptions',
    organizations_url: 'https://api.github.com/users/Codertocat/orgs',
    repos_url: 'https://api.github.com/users/Codertocat/repos',
    events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/Codertocat/received_events',
    type: 'User',
    site_admin: false
  }
};

app.post('/webhook/issues', (req, res) => {
  console.log(req.body);
  // console.log(JSON.stringify(req.body, 0, 4));
  // Parse out that hook call
  // action
  //
  res.sendStatus(200);
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (_, res) => {
  res.sendStatus(404);
  // res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
});

module.exports = app;