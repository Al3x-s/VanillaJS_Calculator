let first_val;
let second_val;
let action;

if(first_val === undefined){
    console.log("riuns")
}


function calc(id){
    if(first_val === undefined){
        let val = parseInt(id)
        let conditional = isNaN(val)
        if(conditional === false){
            console.log(val)
            document.getElementById("active").innerHTML = val
            first_val = val
        }
    else if(first_val != undefined){
        let temp_second_val = parseInt(id)
        let conditional = isNaN(temp_second_val)
        if(conditional === false){
            console.log(temp_second_val)
            document.getElementById("active").innerHTML = temp_second_val
            second_val = temp_second_val
        }
    }
    
}
}
