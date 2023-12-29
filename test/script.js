const unicorneForm = require('unicorne-form')

const field = [
    {
        id: 'name',
        required: true
    },
    {
        id: 'when',
        type: 'date'
    }
];

let wrongType = unicorneForm('test');
console.log(wrongType);

let emptyForm = unicorneForm([]);
console.log(emptyForm);

let formGenerated = unicorneForm(field);
console.log(formGenerated);
