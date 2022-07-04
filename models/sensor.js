import mongoose from 'mongoose'

const measurementSchema = new mongoose.Schema({
  measurement: String,
  value: Number,
  unit: String
})


const sensorSchema = new mongoose.Schema({
  name: String,
  measurement: [measurementSchema]
},{
  timestamps: true,
})

const Sensor = mongoose.model('Sensor', sensorSchema)

export {Sensor}
