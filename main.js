//  1- Ask user to enter age, sex ( M or F ), marital status ( Y or N ) and then using following rules print their place of service.
// if employee is female, then she will work only in urban areas.
// if employee is a male and age is in between 20 to 40 then he may work in anywhere
// if employee is male and age is in between 40 to 60 then he will work in urban areas only.
// And any other input of age should print "ERROR".


let age = prompt('Enter a age:');
let b = prompt("m or f");
let c =prompt("Y or N");

if (b == "f") {
    console.log('then she will work only in urban areas');
}
else if (b == "m" && age >= 20 && age < 40) {
    console.log('then he may work in anywhere')
}
else if (b == "m" && age >= 40 && age <= 60) {
    console.log("then he will work in urban areas only");
}
else {
    console.log("ERROR");
}


