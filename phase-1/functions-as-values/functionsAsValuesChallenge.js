const notifyByEmail = (emailAddress) => {
  console.log(`Email sent to: ${emailAddress}`)
};

const notifyByText = (phoneNumber) => {
  console.log(`Text sent to: ${phoneNumber}`)
};

const notify = (emailFunction, textFunction) => {
  emailFunction('hello@makers.tech.test')
  textFunction('+10000000000')
};

notify(notifyByEmail, notifyByText)
