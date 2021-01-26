//https://www.npmjs.com/package/svgson
var svgson = require('svgson');
var fs = require ('fs');

var fname = __dirname + '/test.svg';
var str = fs.readFileSync (fname, 'utf8');
svgson.parse(str).then( json => {
    console.log (JSON.stringify(json));
});

	     
