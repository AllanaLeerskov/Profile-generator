const generateHTML = require('./src/generateHTML');


const Developer = require('./lib/Developer');
const Engineer = require('./lib/Engineer');

const fs = require('fs'); 
const inquirer = require('inquirer');


const teamArray = []; 


const addDeveloper = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Developer of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the developer's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the developer's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the developer's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the developer's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
       
    ])
    .then(developerInput => {
        const  { name, id, email} = developerInput; 
        const developer = new Developer (name, id, email);

        teamArray.push(developer); 
        console.log(developer); 
    })
};

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to your team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'position',
            message: "Please choose your employee's postiion",
            choices: ['Engineer', 'Developer']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
      

        let { name, id, email, position, confirmAddEmployee } = employeeData; 
        let employee; 

        if (position === "Engineer") {
            employee = new Engineer (name, id, email);

            console.log(employee);

        } else if (position === "Developer") {
            employee = new Developer (name, id, email);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
       
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created. Please check out the index.html")
        }
    })
}; 

addDeveloper()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });