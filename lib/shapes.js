class Logo {
    constructor(shape,shapeColor,text,textColor) {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    if (text.length > 3) {
        throw new Error('`name` must contain up to 3 characters.');
      }
}

triangle (){

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
}

square (){
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
}


circle (){

return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>` 
}

render(){
if (this.shape == "Triangle"){
    return this.triangle()
}
if(this.shape == "Square"){
    return this.square()
}
if(this.shape == "Circle"){
    return this.circle();
}
}
};

module.exports = {Logo};