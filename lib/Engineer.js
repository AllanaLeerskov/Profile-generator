const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email) {
  
        super (name, id, email); 
    }

   
    getGithub () {
        return this.github;
    }

    getPosition () {
        return 'Engineer'
    }
}


module.exports = Engineer;