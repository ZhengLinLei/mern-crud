const Task = require('../models/task');

const controller = {};

controller.get = async (req, res) => {
    // GET ALL 
    const taskList = await Task.find();
    res.json(taskList);
}
controller.getById = async (req, res) => {
    // GET UNIQUE ONE TASK
    const taskList = await Task.findById(re.params.id);
    res.json(taskList);
}
controller.post = async (req, res) => {
    // POST NEW 
    const content = req.body.content;

    const taskNew = new Task({
        content
    });

    await taskNew.save();

    res.json({status: 'Saved'});
}
controller.put = async (req, res) => {
    // MODIFY 
    const { content } = req.body;
    const id = req.params.id;

    const taskPut = await Task.findByIdAndUpdate(id, {content});

    res.json({status: 'Modified'});
}
controller.delete = async (req, res) => {
    // DELETE WITH ID 
    const id = req.params.id;
    await Task.findByIdAndRemove(id);

    res.json({status: 'Deleted'});
}

module.exports = controller;