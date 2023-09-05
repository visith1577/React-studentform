let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()
// Student Model
let studentSchema = require('../models/student.mongo')
// CREATE Student
router.route('/create-student').post((req, res, next) => {
  studentSchema
    .create(req.body, {})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})
// READ Students
router.route('/').get((req, res) => {
  studentSchema
    .find({})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})
// Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  studentSchema
    .findById(req.params.id, {})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema
    .findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {}
    )
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})
// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema
    .findByIdAndRemove(req.params.id, {})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      console.log(error)
    })
})
module.exports = router
