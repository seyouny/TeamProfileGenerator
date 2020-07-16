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
                const manager = new Manager (response.name, response.id, response.email, phone)
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
                const intern = new Intern (response.name, response.id, response.email, response.phone)
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
                const engineer = new Engineer (response.name, response.id, response.email, response.phone)
                employeeList.push(engineer)
        }
    })

}
// *** PSUEDO CODE BECAUSE I DON'T UNDERSTAND WHERE MY MISTAKES ARE
// *** I CREATED AN EMPLOYEELIST AND DEPENDING ON EACH CHOICE, IT SHOULD REDIRECT TO CORRECT ROLE.
// *** THE LAST STEP I NEED IS RENDERING...
// *** I LOOKED AT THE RENDERING HTML JS FILE FOR CLUES.

// fs.writeFile(outputPath,render(employeeList),(err)=>{
//     if (err){
//         console.log("There is an error.")
//     }
// })

runPrompt();
