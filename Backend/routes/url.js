const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Url');

const path = require('path');

router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '../../Frontend/index.ejs');
    res.render(indexPath);
});

router.post('/shorten', async (req, res) => {
    console.log('POST request recieved');
    const longUrl = req.body.long_url;
    const custom = req.body.c_string;
    //const baseUrl = config.get('baseUrl');
    const baseUrl = process.env.BASE_URL || config.get('baseUrl') || 'http://localhost:5000';

    // Check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    try {
        let url;
        let urlCode;
        if (custom) {
            // Check for presence of custom strings in database
            urlCode = custom;
            const existingUrl = await Url.findOne({ urlCode });
            if (existingUrl) {
                return res.send('Unavailable!');
            }

            const shortUrl = baseUrl + '/' + urlCode;
            url = new Url({
                urlCode,
                longUrl,
                shortUrl
            });
        } else {
            // Generate a unique urlCode
            //let urlCode;
            do {
                urlCode = shortid.generate();
            } while (await Url.findOne({ urlCode }));
            
            const shortUrl = baseUrl + '/' + urlCode;
            url = new Url({
                urlCode,
                longUrl,
                shortUrl
            });
        }

        await url.save();
        res.send(url.shortUrl);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
