//check for emptiness 

function isEmpty(schedule){
    for(property in schedule){
        return false;
    }
    return true;
}
let schedule={
    name:"yes",
    name2:"yes",
};
alert(isEmpty(schedule));