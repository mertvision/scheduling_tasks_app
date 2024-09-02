/**
 * The file containing the init function that brings up the server.
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */

// "init" function declaration 
const init = async (server) => {
      try{
        /* The section where the server's port, protocol, host, and address are assigned to 
        and stored in variables. */
        const PORT = process.env.PORT || 8090; // Server port value (8080 as default)
        const server_protocol = process?.env?.SERVER_PROTOCOL // Server protocol value (http or https)
        const server_host = process?.env?.SERVER_HOST // Server host value (localhost)

        const server_base_address = `${server_protocol}://${server_host}:${PORT}`; // Server base address ("http://localhost:8080" as default)

        const init_cb_message = `Server is running on ${server_base_address}`; // For "server.listen" method's callback message

        // "listen" method of server variable (express)
        server.listen(PORT, ()=> {
           console.log(init_cb_message)
        });
      }
      // Catching error
      catch(err){
        console.log(err);
      };
};

// Export statement of "init" function
module.exports = init;