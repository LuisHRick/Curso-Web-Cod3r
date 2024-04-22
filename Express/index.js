const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('Im ok!')
})

app.listen(3001, () => {

})