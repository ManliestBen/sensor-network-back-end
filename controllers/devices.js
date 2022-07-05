import { Device } from "../models/device.js"
import { Profile } from "../models/profile.js"
import { Reading } from "../models/reading.js"

function index(req, res) {
  Device.find({})
  .then(devices => {
    res.json(devices)
  })
}

function create(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    if (profile.isAdmin) {
      Device.create(req.body)
      .then(device => {
        res.json(device)
      })
    } else {
      res.status(500).json({err: 'Not Authorized'})
    }
  })
}

function show(req, res) {
  Reading.find({'device': req.params.id})
  .then(readings => {
    res.json(readings)
  })
}

export {
  index,
  create,
  show
}