export default function NoteDownController() {
    this.hello = 'NoteDown!';
    this.test = x => x + this.hello;
    this.restFunction = (...y) => {
        console.log(`y: ${y}`);
    };

    this.spreadFunction = (y) => {
        console.log(`y: ${y}`);
        this.restFunction(y, ...y);
    };

    var one = 1;

    this.someObject = {
        one,
        sayOne(x=2) {
            return `${this.one} + ${this.one} = ${x}`;
        }
    };

    this.updateHello = () => {
        this.hello = this.test('test! ');
    };

    class HelloClass {
        constructor(message) {
            this.message = message;
        }

        sayHello() {
            return `hello ${this.message} !`;
        }
    }

    this.classTest = new HelloClass('world');
}

