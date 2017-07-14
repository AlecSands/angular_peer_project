console.log("WORKING FOR SURE");


var myApp = angular.module('myApp', []);

myApp.controller('readyController', function(){

var ready = this;
console.log(ready);

ready.name;
ready.text;


ready.messages = [];
ready.addMessage = function(){
  var message = {name: ready.name, text: ready.text};
  ready.messages.push(message);

console.log(ready.name);
console.log(ready.text);
}

});
