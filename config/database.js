const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



main().then(()=>{ console.log('Conectado ao MongoDB')}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true,useUnifiedTopology:true});
}