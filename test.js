// Your code here
const Employee = require("./employee");

const John = new Employee("John Wick", "Dog Lover");

const unboudned = John.sayName;
const bounded = unboudned.bind(John);

setTimeout(bounded,2000);

const unboudnedOcc = John.sayOccupation;
const boundedOcc = unboudnedOcc.bind(John);

setTimeout(boundedOcc,3000);