import mongoose from 'mongoose'

const deviceSchema = new mongoose.Schema({
  name: String,
  location: String,
  controller: String,
  sensors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Sensor'}]
},{
  timestamps: true,
})

const Device = mongoose.model('Device', deviceSchema)

export {Device}
