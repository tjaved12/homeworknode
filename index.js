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
    
    {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
            "email",
            "phone",
            "telekinesis"
        ]
    }
]).then(function (data) {
    fs.writeFile("README.md",(getProject(data)+ getTable(data) + getImage(data)+ getUrl(data)),
    
    
    function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

});

 function getProject(data){
    console.log('Data', data)

    return(
        `# Introduction: ${data.projectName}`
    )};
    
      
    function getTable(data){
           
        return(
            `# Table of Contents
             * ${data.contents[0]}
             * ${data.contents[1]}
             *  ${data.contents[2]}
             *  ${data.contents[3]}
             *  ${data.contents[4]}
             *  ${data.contents[5]}`
        )};
        function getUrl(data){
       
    
            return(
                `## Demo: ${data.demo}`
            )}; 

        function getImage(data){
       
    
            return(
                `## Go Live: ${data.goLive}`
            )};  

        
    






  