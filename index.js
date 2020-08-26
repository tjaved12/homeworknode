var inquirer = require("inquirer");
var fs = require("fs");

//asks questions in the command line
inquirer.prompt([{
//asks project title
        type: "input",
        name: "projectName",
        message: "What is your Project Title?"
    },
//asks project description
    {
        type: "input",
        name: "project",
        message: "What is your Project description, write in 3 sentences?"
    },
//asks what user wants in their README and later creates the table of contents based on choices chosen
    {
        type: "checkbox",
        message: "Table of Contents?",
        name: "contents",
        choices: [
            "About the Project",
            "Description",
            "Usage",
            "Getting Started",
            "End Result",
            "Tech Stack",
            "Licence",
            "Contribution guidelines",
            "Tests",
            "Project Badge",
        ]
    },
//asks the user what is the use of their application

    {
        type: "input",
        name: "usage",
        message: "What is the usage of this app?"
    },
//asks the users what dependicies are steps are required to download and use this application
    {
    type: "input",
    name: "install",
    message: "How to install this app?"
},
//asks the user for the live project url
    {
        type: "link",
        name: "goLive",
        message: "What is your Project URL?"
    },
//asks the user to paste an image url to be displayed in the README
    {
        type: "image",
        name: "demo",
        message: "Paste an image?"
    },
//asks the user what license they are using, creates a badge on the README based on the response
    {
        type: "checkbox",
        message: "What is the License used?",
        name: "license",
        choices: [
            "Boost",
            "None",
            "Apache",
            "N/A",

        ]
    },
//asks what contribution guidelines are followed
    {
        type: "checkbox",
        message: "What contribution guidelines are followed?",
        name: "contribution",
        choices: [
            "Single-purpose commits for related changes",
            "If fixing two issues, making two commits",
            "Test the application before each commit",
            "Never comit the half-done work",

        ]
    },
//asks what languages the project uses
    {
        type: "checkbox",
        message: "What languages the Project used?",
        name: "techStack",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL"
        ]
    },
//asks what test instructions user of the app should follow
    {
        type: "checkbox",
        message: "Test Instructions to follow?",
        name: "tests",
        choices: [
            "correct format for link url",
            "correct format for image paste",
            "list format",
            "Header format"
        ]
    },
//asks if the creator wants their contact info on the README to answer any questions a user of the app may have
    {
        type: "input",
        name: "questions",
        message: "Need more info Y/N?"
    },
   
//formats and writes user input data in the README.md file 

]).then(function (data) {
    fs.writeFile("README.md", getProject(data) +'\n' + getLicense(data)+ '\n' + getDesc(data) + '\n' + getTable(data)  + '\n' + getUsage(data) +'\n' + getInstall(data) +
        '\n' + getImage(data) +'\n' + getUrl(data) + '\n' + getContribution(data) +'\n'+ getTests(data)+ 
         '\n' + getTechstack(data) + '\n' + getQuestion(data),


        function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");

        });

});
//writes app title in README.md
function getProject(data) {
    return (
        `# Title: ${data.projectName}`
    )
};
//creates app license badge in README.md

function getLicense(data) {
    let license = data.license
      if (license =="Apache") {
        let badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
           
    return (
        `### Licence : ` + badge
    )

    } else {
        return(
        `### Licence : ` + `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
         ) }
 
    
};
//writes app description in README.md

function getDesc(data) {
    let project = data.project
    return (
        `## About The Project` + '\n' + project

    )
};
//creates app table fo contents in README.md

function getTable(data) {

    let i = 0
    let lis = data.contents.map(content => {
        i++
        return `* [${content}](#${content.replace(/\s/g , "-").toLowerCase()})`
    })


    let joinedLi = lis.join("\n")

    return (`## Table of Contents` + '\n' + joinedLi)
};


//writes app dependencies and installation procedures in README.md

function getInstall(data) {
    let installation = data.install
    return (
        `## Installation` + '\n' + installation

    )
};
//writes app use and real world application in README.md

function getUsage(data) {
    let usage = data.usage
    return (
        `## Usage` + '\n' + usage
    )
};
//pastes app image in README.md

function getImage(data) {
    let demo = data.demo
    return (
        `## End Result` + '\n' + demo

    )
};
//writes app live url in README.md

function getUrl(data) {
    let live = data.goLive
    return (
        `## Go Live ` + '\n' + live

    )
};


function getContribution(data) {

    let i = 0
    let lis = data.contribution.map(content => {
        i++
        return `* ${content}`
    })


    let joinedLi = lis.join("\n")

    return (`## Contribution Guidelines` + '\n' + joinedLi)
};

function getTests(data) {

    let i = 0
    let lis = data.tests.map(content => {
        i++
        return `* ${content}`
    })


    let joinedLi = lis.join('\n')

    return (`## Tests` + '\n' + joinedLi)

};

function getTechstack(data) {

    let i = 0
    let lis = data.techStack.map(content => {
        i++
        return `* ${content}`
    })


    let joinedLi = lis.join('\n')

    return (`## Tech Stack` + '\n' + joinedLi)

};

function getQuestion(data) {

    let question = data.questions
   
    if (question =="Y") {
        let email = "tahmeenaowais@yahoo.com"
           
    return (
        `### Contact:` + '\n' + email
    )

    } else {
        return(
        `### Contact:`+'\n'+ `No Contact info`)
        }
 

};
