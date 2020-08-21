var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([{
        type: "input",
        name: "Project 1",
        message: "What is your Project name?"
    },
    {
        type: "editor",
        name: "# About the Project",
        message: "What is your Project about, write in 3 sentences?"
    },
    {
        type: "editor",
        name: "# User Story",
        message: "What is your user story, write in 2 sentences?"
    },
    {
        type: "link",
        name: "Go live",
        message: "What is your Project URL?"
    },
    {
        type: "image",
        name: "Demo",
        message: "Paste an image?"
    },
    {
        type: "checkbox",
        message: "What languageswere used for the Project?",
        name: "Tech Stack",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL"
        ]
    },
    {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "Contact",
        choices: [
            "email",
            "phone",
            "telekinesis"
        ]
    }
]).then(function (data) {

   
    fs.writeFile("README.md", "## Introduction"+ JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});