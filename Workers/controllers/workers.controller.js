const worker = require("../model/workers");

async function getAllworkers(req, res) {
    try {
        const workers = await worker.find();
        res.status(200).json(workers);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error", error: error.
                message
        })
    }
}

async function getworkerById(req, res) {
    try {
        const Worker = await worker.findById(req.params.id);
        console.log(req.params.id);

        if (!Worker) {
            return res.status(404).json({ message: "Couldn't find a worker for you." })
        }

        res.status(200).json(Worker)
    } catch (error) {
        res.status(500).json({
            message: "Internal server error", error: error.
                message
        })
    }
}

async function createworker(req, res) {
    try {
        const newworker = await worker.create(req.body);
        res.status(201).json(newworker);
    } catch (error) {
        res.status(400).json({ message: "User creation failed", error: error.message });
    }
}

async function deleteworker(req, res) {
  try {
    const deleteworker = await worker.findByIdAndDelete(req.params.id);
    if(!deleteworker) {
        return res.status(404).json({ message: "User Not Found for deletion." })
    }
    res.status(200).json({ message: "Worker deleted successfully", worker: deleteworker })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message })
  }
}

module.exports = {
    getAllworkers,
    getworkerById,
    createworker,
    deleteworker
    

}