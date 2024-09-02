/**
 * File containing the function that performs dotenv configuration for accessing environment variables
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Third Party Modules
const dotenv = require("dotenv"); // Import statement of "dotenv" module 

// serverConfig function
function serverConfig (){
    dotenv.config();
};

// Export function
module.exports = serverConfig;
