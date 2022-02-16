const Employee = require('./Employee');


class Developer extends Employee {
    constructor (name, id, email) {
      
        super (name, id, email); 
         
    }
 
    getPosition () {
        return 'Developer'
    }
}

module.exports = Developer; 