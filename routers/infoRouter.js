var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
	res.send('Info API Working')
})

module.exports = router
