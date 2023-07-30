
let sum;
let num1;
let num2;
let express;
let operation;
var op = false; 

function doCalc(val){

   
    if(val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' ||
        val == '7' || val == '8' ||val == '9' ){
        if(!op){
            if(sum > 0){
                doClear();
            }
            if(num1){
                num1 += val;
            }
            else{
                num1 = val
            }
            express = num1;
            document.getElementById("showNums").innerHTML = express;
        }
        else{
            if(num2){
                num2 += val;
            }
            else{
                num2 = val
            }
            express += num2;
            document.getElementById("showNums").innerHTML = express;
        }
    }
    else{
        operation = val;
        op = true; 
        express += val;
        document.getElementById("showNums").innerHTML = express;
    }
   

}

function doSolve(){
    num1 = Number(num1);
    num2 = Number(num2);

    //add 
    if(operation == "+"){
        sum = num1 + num2;
    }

    //subtract
    if(operation == "-"){
        sum = num1 - num2;
    }

    //multiply
    if(operation == "*"){
        sum = num1 * num2;
    }

    //divide
    if(operation == "/"){
        sum = num1 / num2;
    }

    num1 = sum;
    num2 = "";
    op = false;
    express += "=";
    express += sum;
    document.getElementById("showNums").innerHTML = express;
}

function doClear(){
    document.getElementById("showNums").innerHTML = "";
    num1 = "";
    num2 = "";
    sum = "";
    operation = "";
    op = false;
}