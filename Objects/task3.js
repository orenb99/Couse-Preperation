//sum object properties
function sumSalaries(salaries){
    let sum=0;
    for(property in salaries){
        sum+=salaries[property];
    }
    return sum;
}
let salaries={
    John:3,
    Avi:800,
    Itzik:800
};
alert(sumSalaries(salaries));