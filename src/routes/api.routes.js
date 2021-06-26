const express = require('express');
const router = express.Router();

const taskCtrl = require('../controllers/task');

// GENERATE API ROUTES
router.get('/', taskCtrl.get);
router.get('/:id', taskCtrl.getById);
router.post('/', taskCtrl.post);
router.put('/:id', taskCtrl.put);
router.delete('/:id', taskCtrl.delete);

module.exports = router;