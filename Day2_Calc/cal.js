let nums = document.querySelectorAll('input[type="int"]');
let resultDisplay = document.querySelector('input[type="result"]');
var result;
var activeButton = null;
function add(){
    result = Number(nums[0].value) + Number(nums[1].value);
    resultDisplay.value = result;
}


function sub(){
    result = Number(nums[0].value) - Number(nums[1].value);
    resultDisplay.value = result;

}


function mul(){
    result = Number(nums[0].value) * Number(nums[1].value);
    resultDisplay.value = result;

}


function div(){
    result = Number(nums[0].value) / Number(nums[1].value);
    resultDisplay.value = result;

}

window.addEventListener("click", function(event) {
    console.log(event.target)
    if (event.target.tagName.toLowerCase() === 'button') {
        if (activeButton != null){
            activeButton.setAttribute("class","");
        }
        activeButton = event.target;
        event.target.setAttribute("class","active");
    }
});