/**
 * 
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

const schedule = require("node-schedule");

// In Every 5 Time (Her 5 dakikada bir)
const runSystemSchedulingJobs = async () => {
     try{
        schedule.scheduleJob(
            '*/1 * * * *', // Cron expression
            async ()=> {
                const serverMemory = process.memoryUsage();
                const version = process.version;
                console.log(serverMemory)
                console.log(`Node.js server version is: ${version}\n`);
                // Memory Usage Informations
                console.log(`Uygulamanın bellekte tuttuğu yer (Memory Heap Total): ${Math.round(serverMemory.heapTotal / 1024 / 1024)} MB`);
                console.log(`Uygulamanın bellek kullanım miktarı (Memory Heap Used): ${Math.round(serverMemory.heapUsed / 1024 / 1024)} MB`);
                console.log(`Uygulamanın işletim sistemi tarafından fiziksel bellekte kullanılan miktarı (Memory RSS): ${Math.round(serverMemory.rss / 1024 / 1024)} MB`);
                console.log(`İş parçacığı ${process.pid} çalışıyor..`);
            }
        );
     }
     catch(err){
        console.log("Unexpected error")
     }
};

module.exports = runSystemSchedulingJobs;
