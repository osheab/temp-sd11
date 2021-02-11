'use strict';

//A definition of a student
class Student{
    id;
    name;


    //creates a new instance (object) of type student
    constructor(id,name){
        //set the id and name of the object instance 
        this.id=id;
        this.name=name;
    }
}

//array of students
var students = [
    new Student('001','Kevin Chalmers'),
    new Student('002', 'Lisa Haskel'),
    new Student('003', 'Arturo Araujo')
];
function printStudents(){
    //build text to display
    var text='';
    //iterate over all the students
    for (var student of students){
        text= text + student.id +': '+student.name+'<br>';
    }
    //get the main element
    var main= document.getElementById('main');
    //set the innerHTML to text
    main.innerHTML = text;
}
