console.log("Hello")


var async = function(){
    setTimeout(function () {log ("x")}, 2000)
}
var adder = function(first, second){
    var sum = first + second
    return sum
}
var log = function (msg) {
    console.log("[Log]: ", msg)
}
log("The sum is " + adder(5,6))
async();
log("y")

