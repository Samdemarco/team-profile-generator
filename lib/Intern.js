const Employee = require("./Employee");

// INTERN CLASS (SUB-CLASS OF EMPLOYEE) 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;