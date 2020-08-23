var inquirer = require("inquirer");
var fs = require("fs");


inquirer.prompt([{
        type: "input",
        name: "projectName",
        message: "What is your Project name?"
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
        name: "project",
        message: "What is your Project about, write in 3 sentences?"
    },
    {
        type: "input",
        name: "userStory",
        message: "What is your user story, write in 2 sentences?"
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
        message: "What languages were used for the Project?",
        name: "techStack",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL"
        ]
    },


]).then(function (data) {

    fs.writeFile("README.md", getProject(data) + '\n' + getTable(data) + '\n' + getDesc(data) + '\n'+ getStory(data)+ '\n'+ getImage(data) + 
    '\n' + getUrl(data)+'\n'+ getTech(data),


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


function getTable(data) {

    let i = 0
    let lis = data.contents.map(content => {
        i++
        return `${i} ${content}`
    })

    console.log(lis)

    let joinedLi = lis.join('\n')

    return (`## Table of Contents` + '\n' + lis)
};

function getDesc(data) {
let project= data.project
    return (
        `## About The Project`+'\n' +project

    )
};

function getStory(data) {
    let story= data.userStory
    return (
        `## User Story`+'\n' + story

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

function getTech(data) {

    let i = 0
    let lis = data.techStack.map(content => {
        i++
        return `${i} ${content}`
    })

    console.log(lis)

    let joinedLi = lis.join('\n')

    return (`## Tech Stack` + '\n' + joinedLi)
};