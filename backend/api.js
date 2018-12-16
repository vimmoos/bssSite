let app = require('express')()
let cors = require('cors')
const bparse = require('body-parser')
let jsonparse = bparse.json()

const fs = require('fs')

const OUTFILE = __dirname + "/results.json"

let exists = fs.existsSync(OUTFILE)
let results
if (exists) {
    console.log("Parsing existing file")
    results = JSON.parse(fs.readFileSync(OUTFILE))
} else {
    console.log("creating new file")
    results = []
}

app.use(cors())
app.get('/',(req,res)=>{
    res.end("OK")
})

app.post('/submit',jsonparse,(req,res)=>{
    console.log(req.body)
    results.push(req.body)
    fs.writeFileSync( OUTFILE, JSON.stringify(results))
    res.end("ok")
})

app.get('/results',(req,res)=>{
    res.end(JSON.stringify(results))
})

app.listen("3001",()=>{
    console.log("listening 3001")
})

