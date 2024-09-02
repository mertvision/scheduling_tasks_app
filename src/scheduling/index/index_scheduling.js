/**
 * Index file of Scheduling Jobs.
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */


const runSystemSchedulingJobs = require("../system/system_scheduling");
const sendEmailScheduling = require("../email/email_scheduling");

const initSchedulingJobs = async () => {
      try {
            runSystemSchedulingJobs();
            sendEmailScheduling();
      }
      catch(err){
            console.log("Unexpected scheduling error");
      }
};

module.exports = initSchedulingJobs;