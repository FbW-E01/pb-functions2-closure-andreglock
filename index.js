function createBase(input){
    return function(number){     
        console.log(number + input)
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27