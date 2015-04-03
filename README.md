# Notedown

## Functional Specification

### Vision
A note-taking-site where a user create notes and keep them for themselves,
share them with other users or release them publicly. 

### Core Features

- Create account with oauth from google.
- Create, edit and destroy notes.
- Share notes with other users or publicly.
- Live markdown preview when editing!

## Technical Specification

### Client Framework

- [Angular][angular]
- [Traceur][traceur]

### Server framework

- [Django][django]
- [Django REST Framework][django-rest-framework]

### Datastorage

- [Django ORM][django-orm]
- [PostgreSQL][postgresql]

### Authentication

- [OAuth][oauth]
- [Google OAuth][google-oauth]

### Unittesting

- [Karma][karma]
- [Jasmine][jasmine]

### E2E-testing
- [Selenium][selenium]
- [Protractor][protractor]

## How to use this project

### Setup

Start by installing node modules.

```sh
npm install
```

For ease of access you can also install gulp-cli and harp globally.

```sh
npm install gulp-cli harp --global
```

### Running the dev environment

Just run the harp server from the project root.

```sh
harp server
```

Then point your browser to http://localhost:9000/src/ and you're ready to go.

### Building the project for production

Run the gulp command for building.

```sh
gulp build
```

And then the production server

```
node server.js
```

### Linting

Run the gulp command for linting.

```sh
gulp lint
```

The js files in the src folder are run though eslint. This command is suitable
for a git pre-commit hook, to make sure oyu don't commit code that isn't
formatted.

## Project Log

### Week 1

Got the frontend up and runnning with a small test page that loads a small
angular app with systemjs and transpiles es6 in the browser. The result was at
first very slow but after fixing the configuration it sped up quite a bit.

Also got a openshift server running on [openshift online][openshift] since 
https://openshift.ida.liu.se seems to be down. The system seems quite usable, 
but the deploys take a lot of time.


[angular]: https://angular.io/
[traceur]: https://github.com/google/traceur-compiler
[django]: https://www.djangoproject.com/
[django-rest-framework]: http://www.django-rest-framework.org/
[django-orm]: https://docs.djangoproject.com/en/1.8/topics/db/
[postgresql]: http://www.postgresql.org/
[oauth]: http://oauth.net/2/
[google-oauth]: https://developers.google.com/accounts/docs/OAuth2/
[karma]: http://karma-runner.github.io/0.12/index.html
[jasmine]: http://jasmine.github.io/
[protractor]: http://angular.github.io/protractor/
[selenium]: http://docs.seleniumhq.org/
[openshift]: https://openshift.redhat.com
