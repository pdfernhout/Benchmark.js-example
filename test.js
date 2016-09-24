// From: https://benchmarkjs.com/


console.log("Benchmark.platform:");
for (let key in Benchmark.platform) {
    if (Benchmark.platform.hasOwnProperty(key)) {
        console.log("    ", key, Benchmark.platform[key]);
    }
}

console.log("\n Performance test to determine fastest is in progress; please wait...");

var suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target), event);
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
