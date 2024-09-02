/**
 * The main file of a Node server that focuses on scheduling tasks.
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// Import Statement of Third Party Modules
const express = require("express");

// Import Statement of Our Modules
const init = require("./init/init");
const initServerConfigurations = require("./config/index");
const initServerMiddlewares = require("./middlewares/server/server_middlewares");
const initSchedulingJobs = require("./scheduling/index/index_scheduling");

// Server value declaration and value assigment with Express module
const server = express();

// Init server configurations
initServerConfigurations();
// Init server middlewares
initServerMiddlewares(server);

// Invoke init function and start server
init(server);

// Initialization Server Scheduling Jobs
initSchedulingJobs();

