const fs = require('fs');
const msgPath = './appMessages.json';

let appMessages;
try {
    const jsonMessages = fs.readFileSync('./resources/database.sql', 'utf-8');
    appMessages = JSON.parse(jsonMessages);
} catch(error){
    console.error("Error loading application messages", error);
    appMessages = {};
}
export default appMessages;

