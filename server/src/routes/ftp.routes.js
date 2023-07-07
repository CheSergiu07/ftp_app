const express = require('express');
const router = express.Router();
const ftpController = require('../controllers/ftp.controller');

router.post('/upload', ftpController.upload);

module.exports = router;
