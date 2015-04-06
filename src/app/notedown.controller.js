NoteDownController.$inject = ['$window', '$http'];

export default function NoteDownController($window, $http) {
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

    // $http.get('http://cors.enhenrik.nu:8000/users/')
    $http.get('https://python-enhenrik.rhcloud.com/users/')
        .success(users => this.users = users)
        .success((data, status, headers, config) => {
            console.log(data, status, headers, config);
        });
}
