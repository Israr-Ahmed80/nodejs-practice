// LECTURE 1,2,3 & 4

let time = 0;
let timer = setInterval(() => {
  time += 2;
  console.log(time + " " + "Hello");
  if (time > 5) clearInterval(timer);
}, 2000);

// LECTURE 5

let anyFunction = (callParameter) => {
  callParameter();
};

sayHi = () => {
  console.log("Hi");
};

anyFunction(sayHi);

// LECTURE 6 & 7 ************

// WAY OF IMPORT

let stuff = require("./stuff");

console.log(
  `addition of ${stuff.num1} and ${stuff.num2} is ${stuff.total(
    stuff.num1,
    stuff.num2
  )}`
);

// LECTURE 8 (MAKING CUSTOM EVENTS)

let events = require("events");

let myEvents = new events.EventEmitter();

let attention = () => {
  console.log("Everyone Attention Please!");
};

let goodMorning = () => {
  console.log("Good Morning!");
};

myEvents.on("sayHi", attention);
myEvents.emit("sayHi");

myEvents.on("sayGoodMorning", goodMorning);
myEvents.emit("sayGoodMorning");

// EXAMPLE OF MAKING CUSTOM EVENTS

let events = require("events");
let myEvents = new events.EventEmitter();
let correct = () => {
  console.log("you are correct!");
};
let wrong = () => {
  console.log("you are wrong!");
};
myEvents.on("correct", correct);
myEvents.on("wrong", wrong);

let a = 2 * 2;
let b = 4;

if (a === b) {
  myEvents.emit("correct");
} else {
  myEvents.emit("wrong");
}

// LECTURE 9 (READING AND CREATING/WRITING FILES)
// SYNCRONOUS

let fs = require("fs");

let creatingAFile = fs.writeFileSync(
  "new file.txt",
  "this file is created by israr"
);

let readingAFile = fs.readFileSync("./new file.txt", "utf-8");
console.log(readingAFile);

let copyingAFile = fs.writeFileSync("another file.txt", readingAFile);

// ASYNCRONOUS (yeh tab tak yahin ruka rahega jab tak iska kaam pura nahi hojata. Bhaly hi iske baad ka code chal kr khtm bhi hojaye)

let fs = require("fs");

fs.writeFile("abc.txt", "Hello there!", () => {});

fs.readFile("abc.txt", "utf8", (data, err) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  }
});

// DELETING EXISTING FILES

let fs = require("fs");
fs.unlink("abc.txt", () => {});

// CREATING DIRECTORIES/FOLDERS AND REMOVING THEM
// 1. SYNCRONOUS

let fs = require("fs");

fs.mkdirSync("src");
fs.rmdirSync("src");

// 2. ASYNCRONOUS

fs.mkdir("src", () => {});
fs.rmdir("src", () => {});

// MAKING DIRECTORIES WITH THE FILES IN IT

let fs = require("fs");

fs.mkdir("src", () => {
  fs.writeFile("./src/index.js", "", () => {});
  fs.writeFile("./src/index.css", "", () => {});
});

// DELETING DIRECTORIES WITH THE FILES IN IT

fs.unlink("./src/index.js", () => {});
fs.unlink("./src/index.css", () => {});
fs.rmdir("src", () => {});
