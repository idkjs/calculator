import calculator from 'ic:canisters/calculator';

calculator.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
