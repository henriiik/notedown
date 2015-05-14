/* globals browser, element, by */
describe('Notedown', function () {
    function Page() {
        this.get = function () {
            browser.get('http://127.0.0.1.xip.io:9000');
        };

        this.signInButton = element(by.cssContainingText('.md-button', 'Sign in with Google'));
        this.allNotesButton = element(by.cssContainingText('.md-button', 'All notes'));

        this.noteList = element.all(by.repeater('note in vm.notes'));
    }

    var page;
    beforeEach(function () {
        page = new Page();
        page.get();
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Notedown!');
    });

    it('should have sign in button', function () {
        expect(page.signInButton.isPresent()).toBe(true);
    });

    it('should have all notes button', function () {
        expect(page.allNotesButton.isPresent()).toBe(true);
    });

    it('should have notes', function () {
        expect(page.noteList.count()).toBeGreaterThan(0);
    });
});
