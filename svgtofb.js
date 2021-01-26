var svgson = require('svgson');
var fs = require ('fs');

var basename = 'test'
var fname = __dirname + `/${basename}.svg`;
var str = fs.readFileSync (fname, 'utf8');
svgson.parse(str).then( obj => {
    objToFB (basename, obj);
})
    .catch (e => { console.error (e) });

function objToFB (id, obj) {
    nameToFB (id, obj);
    typeToFB (id, obj);
    valueToFB (id, obj);
    attributesToFB (id, obj);
    childrenToFB (id, obj);
}

function nameToFB (id, obj) {
    if (obj.name) {
	console.log (`name ${id} ${obj.name}`);
    }
}

function typeToFB (id, obj) {
    if (obj.type) {
	console.log (`type ${id} ${obj.type}`);
    }
}

function valueToFB (id, obj) {
    if (obj.value) {
	console.log (`value ${id} ${obj.value}`);
    }
}

function attributesToFB (id, obj) {
    for (key in obj.attributes) {
	console.log (`${quotify (key)} ${id} ${obj.attributes[key]}`);
    }
}

function childrenToFB (id, obj) {
    if (obj.children) {
	var arr = obj.children;
	var i;
	for (i = 0; i < arr.length ; i ++) {
	    var cid = `${id}_${i}`;
	    console.log (`parent ${cid} ${id}`);
	    objToFB (cid, arr[i]);
	}
    }
}
	



function isalpha (c) {
    return (/[A-Za-z]/).test (c);
}

//https://www.w3resource.com/javascript/form/letters-numbers-field.php
// Function to check letters and numbers
function isalphanumeric(str) {
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if((str.match(letterNumber))) {
	return true;
    } else {
	return false; 
    }
}
  
function isnumeric(str) {
    var number = /^[0-9]+$/;
    if((str.match(number))) {
	return true;
    } else {
	return false; 
    }
}
  
function quotify (str) {
    if (isnumeric (str) ){
	return str;
    }
    if (isalpha (str [0])) {
	if (isalphanumeric (str)) {
	    return str;
	}
    }
    return `'${str}'`;
}
