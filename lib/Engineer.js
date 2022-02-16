const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email) {
        //  employee constructor 
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