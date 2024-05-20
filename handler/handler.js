const { nanoid } = require("nanoid")
const Url = require("../models/index")


const handleCreateNewShortUrl = async (req, res) => {
    const url = req.body.url
    const shortUrl = nanoid(8)

    const newUrl = new Url({
        url: url,
        shortUrl: shortUrl
    })

    newUrl.save().then((result) => {
        res.status(200).json({
            message: "Url shortened",
            shortUrl: shortUrl
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Error shortening url",
            error: err
        })
    })
}

const handleRedirectToOriginalUrl = async (req, res) => {
    const shortUrl = req.params.shortUrl
    console.log(shortUrl)

    Url.findOne({ shortUrl: shortUrl })
    .then((result) => {
        res.redirect(result.url)
    })
    .catch((err) => {
        res.status(404).json({
            message: "Url not found",
            error: err
        })
    })
}

const handleAllUrls = async (req, res) => {
    Url.find().then((result) => {
        res.status(200).json({
            message: "All urls",
            urls: result
        })
    }).catch((err) => {
        res.status(500).json({
            message: "Error fetching urls",
            error: err
        })
    })
}

module.exports = {
    handleCreateNewShortUrl,
    handleRedirectToOriginalUrl,
    handleAllUrls
}