let first_val;
let second_val;
let action;


function calc(id){
    let val = parseInt(id)
    let conditional = isNaN(val)
    if(conditional === false){
        console.log(val)
        document.getElementById("active").innerHTML = val
    }
}
