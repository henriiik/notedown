/* globals browser, element, by */
describe('Notedown', function () {
    function Page() {
        var page = this;

        page.get = function () {
            browser.get('http://localhost:9000')
        }

        page.signInButton = element(by.buttonText('Sign in with Google'))

        return page;
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
});
