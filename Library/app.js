const inquirer = require("inquirer");
const axios = require("axios");
const fs = require ("fs");
const employee = require("./employee");
const engineer = require("./engineer");
const intern = require("./intern");
const manager = require("./manager");

// prompts manager questions before asking questions for the team
function promptManager (){
    return inquirer
        .prompt([ {

            type: "input",
            message: "What is your name?",
            name: "nameManager"

        },
        {
            type: "input",
            message: "What is your title?",
            name: "titleManager"
        },
        {
            type: "input",
            message:"What is your ID?",
            name:"idManager"
        },
        {
            type: "input",
            message:"What is your position?",
            name:"positionmanager"
        },
        {
            type: "input",
            message:"What is your ID?",
            name:"idManager"
        },
        {
            type: "input",
            message:"What is your office number?",
            name:"officeNumber"
        },
        {
            type: "input",
            message:"How many engineers are going to be in your team?",
            name:"newEngineerCount"
        },
        {
            type: "input",
            message:"How many interns will you take in?",
            name:"newInternCount"
        },
        ]);
};



async function init {
    const newEngineerCount;
    const newInternCount;

    await promptManager();


    for (var i = 0; i < promptManager.newEngineerCount; i++){
        if(!/[a-z1-9]/i.test()) {
            const promptEngineer = await promptEngineer();
            console.log(engineer.name, engineer.title, engineer.id, engineer.position)
        }
        else {
            console.log("Incorrect :(")
        }
    }
    
    for (var i = 0; i < promptManager.newInternCount; i++){
        if {
            const promptIntern = await promptIntern();
            console.log(intern.name, intern.title, intern.id,intern.position)
    
        }
        else {
            
        }
    }
}



// prompts Engineer user after manager
function promptEngineer (){
    return inquirer
        .prompt([ {

            type: "input",
            message: "What is your name?",
            name: "nameEngineer"

        },
        {
            type: "input",
            message: "What is your title?",
            name: "titleEngineer"
        },
        {
            type: "input",
            message:"What is your ID?",
            name:"idEngineer"
        },
        {
            type: "input",
            message:"What is your position?",
            name:"positionEngineer"
        },
        {
            type: "input",
            message:"What is your ID?",
            name:"idEngineer"
        },
        {
            type: "input",
            message:"What is your office number?",
            name:"officeNumber"
        },
        {
            type: "input",
            message:"How many engineers are in this team?",
            name:"engineerCount"
        },

       
        ]);
}

//prompts Intern after Engineer is filled out
function promptIntern (){
    return inquirer
        .prompt([ {

            type: "input",
            message: "What is your name?",
            name: "nameIntern"

        },
        {
            type: "input",
            message: "What is your title?",
            name: "titleIntern"
        },
        {
            type: "input",
            message:"What is your ID?",
            name:"idIntern"
        },
        {
            type: "input",
            message:"What is your position?",
            name:"positionIntern"
        },
        {
            type: "input",
            message:"What is your ID?",
            name:"idIntern"
        },
        {
            type: "input",
            message:"What is your office number?",
            name:"officeNumber"
        },
        {
            type: "input",
            message:"How many Interns are in this team?",
            name:"internCount"
        },

        
       
        ]);
}

//Basic HTTP
var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '';
  var body = '';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};