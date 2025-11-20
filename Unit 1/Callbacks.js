// Import the built-in 'fs' (File System) module
const fs = require('fs')

// Define the path
const filePath = './Unit 1/notes/Callback.txt'

// Call fs.readFile(), passing a callback function
fs.readFile(filePath, 'utf-8', (err, data) => {             // utf-8 (Tells the function how to encode the data )
    // This is a callback function. It will run LATER,
    // after the file system operation is finished

    // Check for error first(Error-first Convention)
    if(err){
        console.error("File reading failed! Error:", err.message);
        return;  //Stop execution if there's a problem
    }

    // Process the result if there is no error
    console.log("Inside callback");
    console.log('Successfully read file data:');
    console.log(data);
    
})

// This line runs immediately!
console.log('THe program keeps running while the file is being read in the background.')