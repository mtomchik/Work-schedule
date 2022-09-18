var today = moment();
moment().format("dddd, MMMM Do YYYY, h:mm: a"); 
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

var timeColor = function (){
    if (document.getElementById("input-group-text").innerHTML === document.getElementById("currentDay").innerHTML) {}
}