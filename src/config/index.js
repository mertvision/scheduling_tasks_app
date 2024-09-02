/**
 * The function that runs the function for performing dotenv configuration (it is intended that all configuration functions 
 * and classes be executed under this initServerConfigurations).
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Our Modules 
const serverConfig = require("./config"); // Import statement of "serverConfig" function

// Main initialization of all configs function
const initServerConfigurations = () => {
    serverConfig();
};

// Export statement of "initServerConfigurations" function
module.exports = initServerConfigurations;