const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/show-report-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var showReport = req.session.data['show-report']

  // Check whether the variable matches a condition
  if (showReport == "ocrs-score"){
    // Send user to this page
    res.redirect('/ocrs-risk-score')
  }
  if (showReport == "ocrs-risk"){
    // Send user to this page
    res.redirect('/ocrs-risk-report')
  }
  if (showReport == "vth-report"){
    // Send user to this page
    res.redirect('/vth-report')
  }
  if (showReport == "ve-report"){
    // Send user to this page
    res.redirect('/ve-report')
  }

})
module.exports = router
