export default function ndNote() {
    var directive = {
        templateUrl: 'app/notes/note.html',
        restrict: 'A',
        scope: {
            note: '=ndNote'
        }
    };

    return directive;
}
