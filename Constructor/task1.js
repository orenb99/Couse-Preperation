// create new calculator

function Calculator() {
    this.read =function(){
        this.num1=prompt("enter first number");
        this.num2=prompt("enter second number");
    };
    this.sum=function() {
        return parseInt(this.num1)+parseInt(this.num2);
    }
    this.mul=function () {
        return parseInt(this.num1*this.num2);
    }
}

let calc=new Calculator();
calc.read();
alert(calc.sum());
alert(calc.mul());