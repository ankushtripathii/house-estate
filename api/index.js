import express from 'express';

const app = express();

// listen port no.
app.listen(3000, () => {
    console.log("server is running on port number 3000")
});