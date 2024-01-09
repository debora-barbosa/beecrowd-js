var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var palavra = lines.shift();

if(palavra.length<10){
    console.log("palavrinha");
}else if(10<=palavra.length && palavra.length<=20){
    console.log("palavrao");
}