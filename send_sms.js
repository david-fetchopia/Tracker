const accountSid = 'AC45f78fac324e57dedfbb6128e00cc241';
const authToken = '4a24714d905226c0caef608052a8cf8b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15878706496',
     to: '+16476406630'
   })
  .then(message => console.log(message.sid));