const Repository = require('../controllers/TasksController');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

router.get('/api/tasks', (req, res) => {
    Repository.GetAllTasks((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    }
    );
});

router.post('/api/tasks', (req, res) => {
    let task = req.body;
    Repository.CreateTask(task, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    }
    );
});

router.put('/api/tasks/:id', (req, res) => {
    let id = req.params.id;
    let task = req.body;
    Repository.UpdateTaskById(id, task, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Updated successfully");
        }
    }
    );
});
 router.delete('/api/tasks/:id', (req, res) => {
    let id = req.params.id;
    Repository.DeleteTaskById(id, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send("Deleted successfully");
        }
    }
    );
});

module.exports = router;