const express = require('express');
const router = express.Router();
const validUrl = require('is-valid-http-url');
const shortID = require('shortid');

const URL = require('../models/shortUrl'); //Instance of db

//@route    POST /api/convert
//@desc     Create short URL and store in db
router.post('/convert', async (req, res) => {
  const fullUrl = req.body.fullUrl;

  if (validUrl(fullUrl)) {
    try {
      let dbUrl = await URL.findOne({ fullUrl });

      if (dbUrl) {
        console.log('Found it');
        //res.json(dbUrl.fullUrl);
        res.redirect('/');
      } else {
        //create new record
        let urlCode = shortID.generate();
        dbUrl = new URL({
          urlCode,
          fullUrl,
          shortUrl: `http://localhost:5000/${urlCode}`,
        });
        await dbUrl.save(dbUrl);
        res.redirect('/');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('URL is invalid');
  }
});

module.exports = router;
