import {laptop,mobilePhone} from './china.js';
import {student_list} from './students.js';
console.log(laptop);

console.log(mobilePhone());
console.log(student_list);

student_list.map((item,i)=>{
    let student =  `Student Name ${item.name},${item.roll}`;
    console.log(student);
})