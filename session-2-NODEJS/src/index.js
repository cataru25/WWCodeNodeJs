// --Global object as a window in the browser--
// console.log(global);

// --Read a file text from the pc using file system fs--
// This is the way to import different modules using require
const fs = require("fs");
const path = require("path");

// --Object path allows to get path directory and name file--
// console.log(path);
// console.log(__dirname);
// console.log(__filename);

// --Read a file using promise--
// const readFile = async () => {
//   try {
//     const filePath = path.resolve(`${__dirname}/file.txt`);
//     const data = await fs.promises.readFile(filePath, "binary");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// --Execute readFile function--
// readFile();

// --Challenge. Rewrite and append line in the file.txt--

// const writeLines = async () => {
//   try {
//     const filePath = path.resolve(`${__dirname}/file.txt`);
//     const data = await fs.promises.writeFile(filePath, "I am Catalina!!!");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// writeLines();

// const addLines = async (text) => {
//   try {
//     const filePath = path.resolve(`${__dirname}/file.txt`);
//     const data = await fs.promises.appendFile(filePath, `\n${text}`);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// addLines("I am Catalina");

// --Consuming an API with fetch--

const fetchApi = require("./utils/api");

fetchApi("https://rickandmortyapi.com/api/character/");

// If developer wants to have the result from the second page

// fetchApi("https://rickandmortyapi.com/api/character/?page=2");
