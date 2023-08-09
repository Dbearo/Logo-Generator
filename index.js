const inquirer = require("inquirer");

class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape
        this.sC = shapeColor
        this.text = text
        this.tC = textColor
    }

}

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices: ['Square', "Circle", "Triangle"],
        },
        {
            type: 'input',
            name: 'sC',
            message: 'What color would you like the shape?',
            validate: sCInput => {
                if (sCInput) {
                    return true;
                } else {
                    console.log('Please enter a color!!!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'text',
            message:'please enter text for your logo: (three charicters or less)',
            validate: textInput => {
                if (textInput.length > 3) {
                    console.log('   Text is too long!!!');
                    return false;
                } else {
                   return true;
                } 
            }
        },
        {
            type: 'input',
            name: 'tC',
            message: 'What color would you like the text?',
            validate: sCInput => {
                if (sCInput) {
                    return true;
                } else {
                    console.log('Please enter a color!!!');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(`Hello, ${answers.text}!`);
        module.exports = new Shape(answers.shape,answers.sC,answers.text,answers.tC)
    });

