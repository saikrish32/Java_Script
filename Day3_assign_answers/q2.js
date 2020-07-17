
let str = prompt("Enter os name and version seperated by a space")
let os;
let version;
[os,version] = str.split(" ");


console.log(`the OS name is ${os} and version is ${version}`);