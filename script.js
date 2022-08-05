let first_val = 0
let second_val;
let action;

document.getElementById("active").innerText = first_val

function calc(id){
    let val = parseInt(id)
    let conditional = isNaN(val)
    if(conditional === false){
        console.log(val)
        document.getElementById("active").innerHTML = val
    }
}
