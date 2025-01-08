const accountId = 144553; //Can't be changed
let accountEmail = "abc@gmail.com"; //Solved problem of Sccope use it everywhere.
var accountPassword = "12345"; //Should not use because of problem of scope.
accountCity = "Junagadh"; //This can happen but is not adviced.
let accountState;

// accountId = 2;   Not allowed
accountEmail = "xyz@gmail.com";
accountPassword = "212121";
accountCity = "Ahmedabad";
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);