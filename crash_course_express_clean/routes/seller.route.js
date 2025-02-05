const express = require('express');
const router = express.Router();

const { sellerCreate, sellerEdit, sellerDelete} = require('../controllers/seller.controller');

router.get('/create', sellerCreate);
router.get('/edit', sellerEdit);
router.get('/delete', sellerDelete);

module.exports = router;