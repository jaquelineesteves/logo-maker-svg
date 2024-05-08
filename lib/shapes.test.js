const {Triangle, Square, Circle} = require('../shapes.js');



const shapeT = new Triangle();
shapeT.setColor("blue");
expect(shapeT.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shapeS = new Square();
shapeS.setColor("blue");
expect(shapeS.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shapeC = new Circle();
shapeC.setColor("blue");
expect(shapeC.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');