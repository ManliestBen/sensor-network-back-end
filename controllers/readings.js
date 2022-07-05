import { Reading } from "../models/reading.js"

function create(req, res) {
  if (req.body.accessKey === process.env.ACCESS_KEY) {
    Reading.create(req.body)
    .then(()=> {
      res.status(200).json('Successful')
    })
  }
}

export {
  create
}