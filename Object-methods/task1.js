// calculator

let calculator={
    read() {
        this["number1"]=prompt("enter number 1");
        this["number2"]=prompt("enter number 2");
    },
    sum(){
        return parseInt(this["number1"])+parseInt(this["number2"]);
    },
    mul(){
        return this["number1"]*this["number2"];
    }
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());