//Multiply numeric property values by 2
function multiplyNumeric(menu){
    for(let property in menu){
        if(typeof menu[property] === "number")
            menu[property]*=2;
    }

}
let menu={
    color:"red",
    title:"menu",
    price:800,
    volume:600,
};
multiplyNumeric(menu);
console.log(menu);