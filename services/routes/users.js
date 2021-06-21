var express = require('express');
var router = express.Router();
var { User } = require('../models/user')
/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find((error, users) => {
    if (error) {
      console.error(error);
      res.send({
        error: error.toString(),
        success: false
      });
    }
    res.send({
      users,
      success: true
    })
  })
});

router.post('/', function (req, res) {
  const user = new User({
    ...req.body
  })
  user.save((error) => {
    if (error) {
      res.send({
        error: error.toString(),
        success: false
      });
      return;
    }
    res.send({
      success: true
    })
  })
});

router.delete('/:id', function (req, res) {
  User.findByIdAndDelete(req.params.id, (error, callback) => {
    if (error) {
      res.send({
        error: error.toString(),
        success: false
      })
      return;
    }
    res.send({
      success: true
    })
  })
});

router.put('/:id', function (req, res) {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, (error) => {
    if (error) {
      res.send({
        error: error.toString(),
        success: false
      })
      return;
    }
    res.send({
      success: true,
    })
  })

});

module.exports = router;
