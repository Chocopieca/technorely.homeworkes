var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

fun1();
fun2();

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
    'use strict';
    var myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);