let student = {
    firstname : "Viv",
    lastname : "Richards",
    fullname : function(){
        return this.firstname+ ' ' +this.lastname
    }
}
// console.log(student.fullname());

// student=Object.assign({},student,{skills:["batting","bowling"]},{age:36})
// console.log(student);

// let student2 = Object.assign({},student)
// student2.gender = "male"
// console.log(student);
// console.log(student2)

// console.log( Object.keys(student));
// console.log(Object.values(student));


