//Create new Accumulator

function Accumulator(startingValue) {
    this.value=startingValue;
    this.read= function(){
        this.value+=parseInt(prompt("how much to add?"));
    }    
}

let acc=new Accumulator(2);
acc.read();
acc.read();
acc.read();
alert(acc.value);