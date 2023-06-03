const mongoose=require('mongoose')
const url = 'mongodb+srv://mirror:12345@todoapp.i14rtqe.mongodb.net/'

async function mongo(){
    await mongoose.connect(url)
}
mongo().then(()=>{
    console.log('connected to database')
}).catch(error=>{
    console.log('connection failed to database',error)
})