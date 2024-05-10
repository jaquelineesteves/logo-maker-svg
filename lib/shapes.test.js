const {Logo} = require('./shapes.js');

describe('Logo class', () => {
    it('should have a red triangle logo with white text', () => {
        const logo = new Logo("Triangle", "pink", "jac", "white");
        console.log("Text length:", logo.text.length);
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="pink" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">jac</text></svg>`;
        expect(logo.render()).toEqual(expectedSVG);
    });

    it('should have a blue square logo with white text', () => {
        const logo = new Logo("Square", "blue", "SVG", "white");
        console.log("Text length:", logo.text.length);
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="90" y="40" width="120" height="120" fill="blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
        expect(logo.render()).toEqual(expectedSVG);
    });

    it('should have a green circle logo with white text', () => {
        const logo = new Logo("Circle", "green", "SVG", "white");
        console.log("Text length:", logo.text.length);
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
        expect(logo.render()).toEqual(expectedSVG);
    });
});