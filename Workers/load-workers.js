const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
dns.setDefaultResultOrder("ipv4first");
require('dotenv').config();
const mongoose = require('mongoose');
const worker = require('./model/workers.js')
const workers =
    [
        {
            "name": "Yossi Cohen",
            "email": "yossi.c@company.com",
            "phone": "050-1234567",
            "department": "DevOps",
            "role": "Mid-Level Engineer"
        },
        {
            "name": "Sarah Levi",
            "email": "sarah.l@company.com",
            "phone": "052-7654321",
            "department": "Engineering",
            "role": "Team Lead"
        },
        {
            "name": "Michael Avraham",
            "email": "michael.a@company.com",
            "phone": "054-9876543",
            "department": "Engineering",
            "role": "Junior Specialist"
        },
        {
            "name": "Dana Mizrahi",
            "email": "dana.m@company.com",
            "phone": "053-1112223",
            "department": "HR",
            "role": "Director"
        },
        {
            "name": "David Peretz",
            "email": "david.p@company.com",
            "phone": "050-4445556",
            "department": "DevOps",
            "role": "Senior Consultant"
        },
        {
            "name": "Noa Katz",
            "email": "noa.k@company.com",
            "phone": "058-6667778",
            "department": "Marketing",
            "role": "Junior Specialist"
        },
        {
            "name": "Ron Shapira",
            "email": "ron.s@company.com",
            "phone": "052-8889990",
            "department": "Finance",
            "role": "Team Lead"
        },
        {
            "name": "Maya Biton",
            "email": "maya.b@company.com",
            "phone": "054-3334445",
            "department": "Sales",
            "role": "Mid-Level Engineer"
        }
    ]
async function loadeWorkers() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.26zhx4l.mongodb.net/${process.env.DB_NAME}`,
        );
        await worker.deleteMany({});
        console.log("User deleted  ok");
        await worker.insertMany(workers);
        console.log("User loaded ok");


    } catch (error) {
        console.log("somting not work ");
        console.error("The real error is:", error);
    } finally {
        await mongoose.disconnect();
        console.log("close commaction");
    }

}

loadeWorkers();
