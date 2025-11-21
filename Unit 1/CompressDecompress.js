// Import built-in 'zlib' core module
const zlib = require('zlib')

// Define original data to be compressed
const inputString = 'This is a test string'

// Convert string data into Buffer
const inputBuffer = Buffer.from(inputString,'utf-8')

// Call zlib.gzib(), passing the inputBuffer and a callback
zlib.gzip(inputBuffer, (err, compressedBuffer) => {
    // This is a callback function. It runs later when compression is done

    // Check for an error
    if(err){
        console.log('Compression failed!', err.message);
        return;
    }

    // Process the successfull data 
    console.log('Compressed data ');
    console.log(`Original Size: ${inputBuffer.length} bytes`);
    console.log(`Compressed Size: ${compressedBuffer.length} bytes`);
    console.log('Compressed successfully');

    // Perform Decompression
    zlib.gunzip(compressedBuffer, (err,decompressedBuffer) => {

        if(err){
            console.log('Decompressed failed!', err.message);
            return;
        }

        const originalString = decompressedBuffer.toString('utf-8')
        console.log(`Decompressed Data: ${originalString}`);
        console.log(`Decompressed Length: ${decompressedBuffer.length} bytes`);
        
    })

    // Non-blocking 
    console.log("This program is running other task while zlib is working in background");
    
    
    
})