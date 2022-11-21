const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://hendri:1234@cluster0.ukn3rik.mongodb.net/sekolah?retryWrites=true&w=majority', (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('db connect')
	}
  });
}

app.use(routes)
app.listen(3000, ()=> {
	console.log('connected')
})						
