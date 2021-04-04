let name = { 
    firstname :"roshan",
    lastname:"shilpakar",
}

printFullName = function(hometown){
    console.log(this.firstname + " " + this.lastname + " " + hometown);
}

printFullName.call(name, "Bhaktapur");

let name2 ={
    firstname:"roshani",
    lastname:"shilpakar"
}

//burrowing the function
printFullName.call(name2 , "Aus");  //call is done using individual items


printFullName.apply(name2, ["India"]); //apply is done using the array

//bind - we don't call ir directly like call and apply but bind the return of the method and calls later
// bind - keep the method as copy and used later (invoking)

let printMyName = printFullName.bind(name2 , "Canber");
console.log(printMyName);
printMyName();

