/**
 * The middlewares used by the server
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Third Party Modules
const express = require("express"); // "express" module
const helmet = require("helmet"); // "helmet" module
const morgan = require("morgan"); // "morgan" module

// "initServerMiddlewares" function starts server middlewares
function initServerMiddlewares (server){
      server.use(express.json());
      server.use(helmet());
      server.use(morgan('dev'));
};

// Export statement of "initServerMiddlewares" function
module.exports = initServerMiddlewares;