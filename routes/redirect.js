const express = require('express');
const router = express.Router();
const URL = require('../models/shortUrl');

//@route    GET /:code
//@desc     Retrieve full url and redirect user
router.get('/:code', async (req, res) => {
  const urlCode = req.params.code;

  let dbUrl = await URL.findOne({ urlCode });

  if (dbUrl) {
    console.log('Found short code');
    dbUrl.clicks++;
    await dbUrl.save();
    res.status(200).redirect(dbUrl.fullUrl);
  } else {
    res.status(404).json('URL not found');
  }
});

//@route    GET /
//@desc     Retrieve list of entries and display to user
router.get('/', async (req, res) => {
  // Find url in our table
  const shorturls = await URL.find();
  res.render('index', { shortUrls: shorturls }); //Passing shorturls into the view
});

module.exports = router;
