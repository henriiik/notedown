import mock from 'angular-mocks';

describe('messages', () => {
    var messages, listener, info;

    beforeEach(() => {
        mock.module('notedown.services');

        info = 'not changed';

        listener = newInfo => info = newInfo;

        mock.inject(_messages_ => {
            messages = _messages_;
        });
    });

    it('should be defined', () => {
        expect(messages).toBeDefined();
    });

    it('should have subscribe function', () => {
        expect(messages.subscribe).toBeDefined();
    });

    it('should have publish function', () => {
        expect(messages.publish).toBeDefined();
    });

    it('should return undefined if you subscribe to a new topic', () => {
        messages.subscribe('topic', listener);
        expect(info).toBeUndefined();
    });

    it('should return latest when you subscribe to an old topic', () => {
        messages.publish('topic', 'message');
        messages.subscribe('topic', listener);
        expect(info).toMatch('message');
    });

    it('should update when new info is published', () => {
        messages.subscribe('topic', listener);
        expect(info).toBeUndefined();
        messages.publish('topic', 'message');
        expect(info).toMatch('message');
    });
});
