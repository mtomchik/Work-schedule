var saveButton = document.querySelector(".fa fa-save")
var input = document.querySelector(".form-control")
var currentTime =  moment().format("H");
var scheduledTime = document.querySelector(".input-group-text").innerHTML

var today = moment();
moment().format("dddd, MMMM Do YYYY, h:mm: a");
var update = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');     
}
setInterval(update, 1000);

function userInput() {
    var task = input.value;
    localStorage.setItem("task", JSON.stringify(task));
    console.log(task);
}
function renderMessage(){
    var task = JSON.parse(localStorage.getItem("input"));
    if (task !== null) {
        document.querySelector(".form-control").textContent = task
    }
} 
function colorCode(){
    // for (var i = 0; i < input.length; i++ ) {
    //     input.setAttribute("style", "background-color: gray")
    // }
    if (currentTime < scheduledTime) {
        input.setAttribute("style", "background-color: green");
    } else if (currentTime = scheduledTime) {
        input.setAttribute("style", "background-color: red");
    } else {
        input.setAttribute("style", "background-color: gray");
    }}
    console.log(scheduledTime);
    console.log(currentTime);
//     if (currentTime = scheduledTime){
//         input[0].setAttribute("style", "background color: red");
//     }else if (currentTime>)
// }
saveButton.addEventListener("click", userInput())