var eslint = require('eslint');
var test = require('tape');

test('validate rule syntax', function (t) {
  var CLIEngine = eslint.CLIEngine;

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  });

  var code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n';
  t.equal(cli.executeOnText(code).errorCount, 3);
  t.end();
});
