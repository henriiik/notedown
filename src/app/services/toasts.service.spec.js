import mock from 'angular-mocks';

describe('toasts', () => {
    var toasts, mockMessages, mockMdToast, topic, listener, message;

    beforeEach(() => {
        mock.module('notedown.services');

        mockMessages = {
            subscribe: (t, l) => {
                topic = t;
                listener = l;
            }
        };
        spyOn(mockMessages, 'subscribe').and.callThrough();

        mockMdToast = {
            showSimple: m => message = m
        };
        spyOn(mockMdToast, 'showSimple').and.callThrough();

        mock.module($provide => {
            $provide.value('messages', mockMessages);
            $provide.value('$mdToast', mockMdToast);
        });

        mock.inject(_toasts_ => {
            toasts = _toasts_;
        });
    });

    it('should be defined', () => {
        expect(toasts).toBeDefined();
    });

    it('should have show function', () => {
        expect(toasts.show).toBeDefined();
    });

    it('should show show toast', () => {
        toasts.show('message');
        expect(mockMdToast.showSimple).toHaveBeenCalled();
        expect(message).toEqual('message');
    });

    it('should listen to responseError', () => {
        expect(topic).toEqual('responseError');
    });

    it('should show toast with responseError', () => {
        listener({
            status: 123,
            data: {
                detail: 'message'
            }
        });
        expect(message).toMatch('123 - message');
    });
});
