import auth from './auth.service';
import markdown from './markdown.service';
import messages from './messages.service';
import toasts from './toasts.service';

angular
    .module('notedown.services', [
        'notedown',
        'ngMaterial'
    ])
    .factory('auth', auth)
    .factory('markdown', markdown)
    .factory('messages', messages)
    .factory('toasts', toasts);
