const express = require('express')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)

app.set('port', process.env.PORT || 3000)

app.use(express.static(path.join(__dirname, 'src')))

console.log(path.join(__dirname, 'src'))

app.get("*", (request, response) => {
    
    response.redirect("index.html")

})

server.listen(app.get('port'),'0.0.0.0', () => {
    console.log('Server on port', app.get('port'))
})