System.baseUrl = '/';

System.traceurOptions = {
    annotations: true,
    memberVariables: true,
    typeAssertions: true,
    typeAssertionModule: 'rtts_assert',
    types: true
};

System.import('greeter').then(function(m) {
    var greeter = new m.Greeter('Hello, world!');
    greeter.greet();
});
