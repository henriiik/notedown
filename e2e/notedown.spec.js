/* globals browser, element, by */
describe('Notedown', function () {
    beforeEach(function () {
        browser.get('http://localhost:9000');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Notedown!');
    });

    it('should update on button click', function () {
        var helloElement = element(by.binding('vm.hello'));
        expect(helloElement.getText()).toEqual('NoteDown!');
        element(by.buttonText('update!')).click();
        expect(helloElement.getText()).toEqual('test! NoteDown!');
    });
});
