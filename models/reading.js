import mongoose from 'mongoose'

const readingSchema = new mongoose.Schema({
  device: {type: mongoose.Schema.Types.ObjectId, ref: 'Device'},
  temperature: Number,
  humidity: Number,
},{
  timestamps: true,
})

const Reading = mongoose.model('Reading', readingSchema)

export {Reading}
