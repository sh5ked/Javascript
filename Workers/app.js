const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const workerRoutes = require("./routes/workers"); 

require('dotenv').config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5501"
}));

app.use("/api/workers", workerRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});