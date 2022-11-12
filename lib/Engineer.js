const Employee = require("./Employee");

// ENGINEER CLASS (SUB-CLASS OF EMPLOYEE) 
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.title = "Engineer";
    }
    getGitHub(){
        return this.github;
    }
}

module.exports = Engineer;