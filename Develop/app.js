const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const { run } = require("jest");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var employeeList = []

function runPrompt(){

    inquirer.prompt([

        {
        type: "input",
        message: "Please enter the name:",
        name: "name"
        },
        {
            type: "input",
            message: "Please enter the id:",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the email:",
            name: "email"
        },
        {
            type: "list",
            message: "Please enter the role:",
            choices:["Manager","Engineer","Intern"],
            name: "role"
        }
    ]).then((response)=>{
        if (response.role === "Manager"){
            var phone = '';

            inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter an office number:",
                    name: "phone"
                }
                ]).then((re)=>{
                    phone = re.phone
                })
                const manager = new Employee (response.name, response.id, response.email, phone)
                employeeList.push(manager)
    
        }
        if (response.role === "Intern"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the school:",
                    name: "school"
                }
                ])
                const intern = new Employee (response.name, response.id, response.email, response.phone)
                employeeList.push(intern)
    
        }
        if (response.role === "Engineer"){
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the GitHub username:",
                    name: "github"
                }
                ])
                const engineer = new Employee (response.name, response.id, response.email, response.phone)
                employeeList.push(engineer)
        }
    })
}
runPrompt().then(()=>{console.log(employeeList)})
// *** I CREATED AN EMPLOYEELIST AND DEPENDING ON EACH CHOICE, IT SHOULD REDIRECT TO CORRECT ROLE.
// *** THE LAST STEP I NEED IS RENDERING...
// *** I LOOKED AT THE RENDERING HTML JS FILE FOR CLUES.

// fs.writeFile(outputPath,render(employeeList),(err)=>{
//     if (err){
//         console.log("There is an error.")
//     }
// })

// fs.writeFile(outputPath,render(employeeList),(err)=>{
//     if (err){
//         console.log("There is an error.")
//     }
// })

runPrompt();
// const run = async () => {
//     const answers = await runPrompt();

//     return answers
//     console.log(employeeList)
// };
// run()

// then push to array containing all employees
// then render([arr])
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
