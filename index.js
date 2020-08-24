var inquirer = require("inquirer");
var fs = require("fs");


inquirer.prompt([{
    
        type: "input",
        name: "projectName",
        message: "What is your Project Title?"
    },
    {
        type: "link",
        name: "badge",
        message: "What is your Project badge?"
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
            "User Stories",
            "Development Strategy",
            "Demo",
            "User Specifications",
            "Extra Futures/Spefications",
            "End Result",
            "Getting Started",
            "Tech Stack",
            "Licence",
        ]
    },
  
    
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this app?"
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
            "ISC",
            "MIT",
            "Rutgers",
            "None",
           
        ]
    },
    {
        type: "ckeckbox",
        message: "What contribution guidelines are followed?",
        name: "contribution",
        choices: [
            "Single-purpose commits for related changes.",
            "If fixing two issues, making two commits.",
            "Test the application before each commit.",
            "Never comit the half-done work.",
           
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



]).then(function (data) {

    fs.writeFile("README.md", getProject(data)+ '\n' + getBadge(data) + '\n' + getDesc(data) + '\n' + getTable(data)  + '\n'+ getStory(data)+ '\n'+ getImage(data) + 
    '\n' + getUrl(data)+'\n'+ getTechstack(data),


        function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");

        });

});

function getProject(data) {
    console.log('Data', data)

    return (
        `# Project Name: ${data.projectName}`
    )
};
function getBadge(data) {
    console.log('Data', data)
let badge=data.badge
    return (
        `# Project Badge`+'\n'+ badge
    )
};

function getTable(data) {

    let i = 0
    let lis = data.contents.map(content => {
        i++
        return `* ${content}`
    })

    console.log(lis)

    let joinedLi = lis.join("\n")

    return (`## Table of Contents` + '\n' + joinedLi )
};

function getDesc(data) {
let project= data.project
    return (
        `## About The Project`+'\n' +project

    )
};

function getStory(data) {
    let story= data.install
    return (
        `## Installation`+'\n' + story

    )
};


function getImage(data) {
let demo=data.demo
    return (
        `## Demo:`+'\n'+ demo

    )
};


function getUrl(data) {
    let live=data.goLive
    return (
        `## Go Live:`+'\n'+live
    )
};

function getTechstack(data) {

    let i = 0
    let lis = data.techStack.map(content => {
        i++
        return `* ${content}`
    })

    console.log(lis)

    let joinedLi = lis.join('\n')

    return (`## Tests` + '\n' + joinedLi)
};