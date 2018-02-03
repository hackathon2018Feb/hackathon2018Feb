var TeleSignSDK = require('telesignsdk');
const config = require('./config')

const customerId = config.customerId;
const apiKey = config.apiKey;
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10 * 1000; // 10 secs

const client = new TeleSignSDK(customerId,
  apiKey,
  rest_endpoint,
  timeout // optional
  // userAgent
);

const phoneNumber = "13143153242";
// const phoneNumber = "15103782482";
const message = "John";
const messageType = "ARN";

console.log("## MessagingClient.message ##");

function messageCallback(error, responseBody) {
  if (error === null) {
    console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
      ` => code: ${responseBody['status']['code']}` +
      `, description: ${responseBody['status']['description']}`);
  } else {
    console.error("Unable to send message. " + error);
  }
}
client.sms.message(messageCallback, phoneNumber, message, messageType);
