const fsPromises = require('fs').promises;

async function fileOperations(){
    const inputFile = './Unit 1/notes/fsModule.txt';
    const outputFile = 'output.txt'
    try{
        console.log(`1. Reading from ${inputFile}...`);

        const data = await fsPromises.readFile(inputFile,'utf-8');

        console.log(`2. Successfully read data: ${data}`);

        const newContent = `Processed data from Node.js: ${data.toUpperCase()}`
        
        await fsPromises.writeFile(outputFile, newContent);

        console.log(`3. Successfully wrote data  to ${outputFile}`);
        const newData = await fsPromises.readFile(outputFile, 'utf-8');

        console.log(`${newData}`);

        await fsPromises.unlink(outputFile);
        console.log(`4. Successfully deleted ${outputFile}`)
        
    }catch(err){
        console.error("An error occurred during file operations:",err.message);
    }
}
fileOperations();
console.log('5. This message prints IMMEDIATELY while file I/O starts in the background.');