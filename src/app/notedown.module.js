// Angular
import 'angular';
import 'angular-material';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';

// External Libraries
import Showdown from 'showdown';

// Notedown
import './notes/notes.module';
import './services/services.module';
import './users/users.module';

import config from './notedown.config';
import routes from './notedown.routes';

angular
    .module('notedown', [
        'ngMaterial',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'notedown.services',
        'notedown.notes',
        'notedown.users'
    ])
    .config(config)
    .config(routes)
    // .constant('apiUrl', 'http://cors.enhenrik.nu:8000')
    // .constant('apiUrl', 'http://backend-henro843.openshift.ida.liu.se')
    .constant('apiUrl', 'https://backend-enhenrik.rhcloud.com')
    .constant('Showdown', Showdown);
