// Import promise based fs module
const fsPromises = require('fs').promises

const configPath = './Unit 1/config.json'

async function updateConfig() {
    
   try{
          // Reading raw data of config.json
          console.log("1. Reading raw JSON data...");
          const rawData = await fsPromises.readFile(configPath,'utf-8');

          // Converting JSON raw data to JavaScript object using parse
          const configObject = JSON.parse(rawData);

          console.log(`2. Current Age: ${configObject.age}`);

          // Modify the property of JavaScript object
          configObject.age = 19;
          configObject.lastUpdated = new Date().toISOString();  //Add new field

          console.log(`3. New Age set to: ${configObject.age}`);
          
          // Use stringify() to convert updated object back to JSON string 
          const updatedJsonString = JSON.stringify(configObject,null,2);   //Third argument (2) is use for indentation

          // Write the new JSON string back to file
          await fsPromises.writeFile(configPath, updatedJsonString)

          console.log("4. Config updated succesfully and saved to file");
          console.log(configObject.lastUpdated);
     }catch(err){
        console.log('An error occured:',err.message)
   }


    
}

updateConfig();