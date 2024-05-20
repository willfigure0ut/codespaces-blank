const express = require("express")

const { handleCreateNewShortUrl, handleRedirectToOriginalUrl, handleAllUrls } = require("../handler/handler")

const router = express.Router()

router.post("/", handleCreateNewShortUrl)

router.get("/:shortUrl", handleRedirectToOriginalUrl)

router.get("/urls/all", handleAllUrls)

module.exports = router;