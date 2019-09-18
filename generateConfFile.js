// Libs
const fs = require('fs');
var prompt = require('prompt');

// Prompt Attributes for generate base 64 auth key
var prompt_attributes = [
    {
        name: 'uri'
    },
    {
        name: 'username',
    },
    {
        name: 'password',
        hidden: true
    },
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(`An error occured: ${err}`);
        return 1;
    } else {
        const uri = result.uri
        const buffer = Buffer.from(`${result.username}:${result.password}`);
        const base64 = buffer.toString('base64');

        const configJson = {
            baseURI: uri,
            Authorization: base64,
            PostContent: "application/x-www-form-urlencoded",
            GetContent: "application/vnd.sap-id-service.sp-user-id+xml"
        };

        fs.writeFile('./API/config.json', JSON.stringify(configJson, null, 2), 'utf-8', err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully created the config file.')
            }
        })
    }
});