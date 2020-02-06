let RPClient = require('reportportal-client');

let rpClient = new RPClient({
    token: "03ed3280-1564-4f1b-8bb3-7b9aa8d7bfe7",
    endpoint: "https://web.demo.reportportal.io",
    launch: "artyom123_TEST_EXAMPLE",
    project: "artyom123_personal"
});

rpClient.checkConnect().then((response) => {
    console.log('You have successfully connected to the server.');
    console.log(`You are using an account: ${response.fullName}`);
}, (error) => {
    console.log('Error connection to server');
    console.dir(error);
});