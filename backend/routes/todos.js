const express = require('express');
const Todo = require('../models/Todo');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { title, description } = req.body;
    
    const todo = await Todo.create({
      title,
      description,
      user: req.user._id
    });
    
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: 'Error creating todo' });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: 'Error updating todo' });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id, user: req.user._id });
    
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting todo' });
  }
});

module.exports = router;