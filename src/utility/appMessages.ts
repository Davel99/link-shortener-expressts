const fs = require('fs');
const msgPath = './src/utility/appMessages.json';

let appMessages : any;

const jsonMessages = fs.readFileSync(msgPath, 'utf-8')
appMessages = JSON.parse(jsonMessages);
export default appMessages;

