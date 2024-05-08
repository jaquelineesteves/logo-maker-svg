const fs = require('fs');
const inquirer = require('inquirer');
//const shapes= require('./lib/shapes.js')


function createaSVG(data){
if(data.shape == "Triangle"){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text></svg>`
}
if(data.shape == "Square"){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="90" y="40" width="120" height="120" fill="${data.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text>
  </svg>`

}
if(data.shape == "Circle"){
  return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.name}</text>
  </svg>`
}
else{``}
};


{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="yellow" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">ABC</text></svg>

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="Black" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">ABC</text>
</svg>
8:23
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="yellow" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ABC</text>
</svg> */}



function promptUser() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "What name, with up to 3 letters, would you like you logo to display?",
          name: "name",
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
            "Choose shapes color (Enter color keyword OR a hexadecimal number)",
          name: "shapeColor",
        },
      ])
      .then((response) => {
        if (response.name.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptUser();
        } else {
          fs.writeFile('logo.svg', createaSVG(response), (error) =>{
            if(error){ 
            return '';
          } console.log('logo.svg successfully created')
        });
        }
      });
  }
  promptUser();