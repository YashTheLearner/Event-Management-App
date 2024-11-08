
import express from 'express';



const port = 3000; // Define the port number to listen on. In this case, it's 3000.  // Importing required modules.  // Setting up the express server.  // Starting the server on the specified port.  // Logging a message to the console indicating that the server is listening.  // Note: You will need to run this server on a Node.js environment.  // You can use a local development environment


const app = express();


app.use(express.json())


app.use("/api/user", userRouter)
app.listen(port, () =>{ console.log(`Listening on localhost:${port}`)
          
})

