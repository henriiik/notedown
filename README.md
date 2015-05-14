[ ![Codeship Status for henriiik/notedown](https://codeship.com/projects/93a7a0f0-bf82-0132-57f9-7e12d1fd4345/status?branch=master)](https://codeship.com/projects/72993)

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
- [SystemJS][systemjs] / [jspm][jspm]
- [Traceur][traceur]

### Server framework

- [Django][django]
- [Django REST Framework][django-rest-framework]

### Datastorage

- [Django ORM][django-orm]
- [PostgreSQL][postgresql]

### Authentication

- [OAuth][oauth]
- [Google Sign-In][google-sign-in]

### Unittesting

- [Karma][karma]
- [Jasmine][jasmine]

### E2E-testing
- [Selenium][selenium]
- [Protractor][protractor]

## How to use this project

### Setup

For ease of access you should install the following globally, otherwise most of
the commands will have to be run from 'node_modules/.bin/'

```sh
npm install karma-cli gulp-cli jspm harp --global
```

Start by installing node modules and the jspm packages.

```sh
npm install
jspm install
```

### Running the dev environment

Run the harp server and target the src folder, then point your browser to
http://localhost:9000/src/ and you're ready to go.

```sh
harp server .src/
- or -
npm run dev
```

### Building the project for production

Run the gulp command for building.

```sh
gulp build
- or -
npm run build
```

And then the production server

```
npm run start
```

### Linting

The gulp command for linting runs all js files in the src/app folder through
eslint.

```sh
gulp lint
```

### Unit tests

The gulp command for unit testing runs all the karma unittests.

```sh
gulp test
- or -
npm run test
```

### End-to-end tests

First update the webdriver.

```sh
npm run update-webdriver
```

Then run either the dev or production server

```sh
npm run dev
- or -
npm run start
```

Then you can run the protractor tests.

```sh
npm run protractor
```

### Pre-commit

The pre-commit gulp command runs the lint and test commands, and is suitable
for using in a git pre-commit hook, to make sure you dont commit ugly or broken
code.

```sh
gulp pre-commit
```

[angular]: https://angular.io/
[traceur]: https://github.com/google/traceur-compiler
[SystemJS]: https://github.com/systemjs/systemjs
[jspm]: http://jspm.io/
[django]: https://www.djangoproject.com/
[django-rest-framework]: http://www.django-rest-framework.org/
[django-orm]: https://docs.djangoproject.com/en/1.8/topics/db/
[postgresql]: http://www.postgresql.org/
[oauth]: http://oauth.net/2/
[google-sign-in]: https://developers.google.com/identity/sign-in/
[karma]: http://karma-runner.github.io/0.12/index.html
[jasmine]: http://jasmine.github.io/
[protractor]: http://angular.github.io/protractor/
[selenium]: http://docs.seleniumhq.org/
