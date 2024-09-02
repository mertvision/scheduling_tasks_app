/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

const schedule = require("node-schedule");
const sendEmail = require("../../lib/email/email_lib");

const sendEmailScheduling = async () => {
  const date = new Date("2025-01-01T00:00:00.000");
  schedule.scheduleJob(date, async()=> {
    try{
      sendEmail("Happy New Year!");
    }
    catch(err){
      
    };
  });
};

module.exports = sendEmailScheduling;

module.exports = {sendEmail};