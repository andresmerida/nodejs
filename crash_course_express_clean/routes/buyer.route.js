const express = require('express');
const router = express.Router();

const { buyerCreate, buyerEdit, buyerDelete} = require('../controllers/buyer.controller');

router.get('/create', buyerCreate)
router.get('/edit', buyerEdit)
router.get('/delete', buyerDelete)

module.exports = router;