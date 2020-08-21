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
        name: "Contents",
        choices:[
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
        message: "What languages were used for the Project?",
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

   
    fs.writeFile("README.md", getData(data), 
    
    
    function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});


 function getData(data){
    console.log('Data', data)

    return(
        `# ${data.projectName}`
    )

}