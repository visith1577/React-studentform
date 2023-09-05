const mongoose = require('mongoose')

const MONGO_URL = 'mongodb://0.0.0.0:27017/student'

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
});

mongoose.connection.on('error', (err) => {
  console.error(err)
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
  await mongoose.disconnect()
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}