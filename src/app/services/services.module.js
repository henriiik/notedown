import auth from './auth.service';
import markdown from './markdown.service';

angular
    .module('notedown.services', [
        'notedown'
    ])
    .factory('auth', auth)
    .factory('markdown', markdown);
