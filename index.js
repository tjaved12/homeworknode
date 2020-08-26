var inquirer = require("inquirer");
var fs = require("fs");


inquirer.prompt([{

        type: "input",
        name: "projectName",
        message: "What is your Project Title?"
    },

    {
        type: "input",
        name: "project",
        message: "What is your Project description, write in 3 sentences?"
    },
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


    {
        type: "input",
        name: "usage",
        message: "What is the usage of this app?"
    },
    {
    type: "input",
    name: "install",
    message: "How to install this app?"
},
    {
        type: "link",
        name: "goLive",
        message: "What is your Project URL?"
    },
    {
        type: "image",
        name: "demo",
        message: "Paste an image?"
    },

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
    {
        type: "input",
        name: "questions",
        message: "Need more info Y/N?"
    },
   

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

function getProject(data) {
    return (
        `# Title: ${data.projectName}`
    )
};

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
function getDesc(data) {
    let project = data.project
    return (
        `## About The Project` + '\n' + project

    )
};

function getTable(data) {

    let i = 0
    let lis = data.contents.map(content => {
        i++
        return `* [${content}](#${content.replace(/\s/g , "-").toLowerCase()})`
    })


    let joinedLi = lis.join("\n")

    return (`## Table of Contents` + '\n' + joinedLi)
};



function getInstall(data) {
    let installation = data.install
    return (
        `## Installation` + '\n' + installation

    )
};

function getUsage(data) {
    let usage = data.usage
    return (
        `## Usage` + '\n' + usage
    )
};

function getImage(data) {
    let demo = data.demo
    return (
        `## End Result` + '\n' + demo

    )
};

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
