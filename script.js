// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    try{
        var inp = eval(document.getElementById("result").value);
        var q = eval(inp);
        document.getElementById("result").value = q;
        }
    
    catch(err){
        document.getElementById("result").value = "error";
    }
}

// This function deletes value
function clearDigit(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}