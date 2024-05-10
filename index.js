const fs = require('fs/promises');
const inquirer = require('inquirer');
const {Logo} = require('./lib/shapes.js');



// function createaSVG(data){
// if(data.shape == "Triangle"){
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text></svg>`
// }
// if(data.shape == "Square"){
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <rect x="90" y="40" width="120" height="120" fill="${data.shapeColor}" />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text>
//   </svg>`

// }
// if(data.shape == "Circle"){
//   return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text>
//   </svg>`
// }
// else{``}
// };




function promptUser() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "What name, with up to 3 letters, would you like you logo to display?",
          name: "text",
        },
        {
          type: "input",
          message:
            "Choose text color (Enter color keyword OR a hexadecimal number)",
          name: "textColor",
        },
        {
          type: "list",
          message: "What shape would you like the logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        {
          type: "input",
          message:
            "Choose shape's color (Enter color keyword OR a hexadecimal number)",
          name: "shapeColor",
        },
      ])
      .then((response) => {
    const post = new Logo(
      response.shape,
      response.shapeColor,
      response.text,
      response.textColor
    );
    const createSVG = post.render();
          fs.writeFile('logo.svg',createSVG, (error) =>{
            if(error){ 
            return'';
          }
        });console.log('logo.svg successfully created');
        }
      );
  }
  promptUser();