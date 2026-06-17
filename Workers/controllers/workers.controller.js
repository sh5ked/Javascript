const workers = require("../model/workers");



async function getAllworkers (req, res) {

    try {
        const workers_ = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error", error: error. message

        })

    }

}