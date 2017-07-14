console.log("WORKING FOR SURE");


var myApp = angular.module('myApp', []);

myApp.controller('readyController', function(){

var ready = this;
console.log(ready);

ready.name;
ready.text;
ready.search;

ready.messages = [];
ready.addMessage = function(){
  var message = {name: ready.name, text: ready.text, visible: true};
  ready.messages.push(message);

console.log(ready.messages);
console.log(ready.name);
console.log(ready.text);
}

ready.delete = function(index){
  ready.messages.splice(index, 1);
}





});
