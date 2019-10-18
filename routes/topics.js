var express = require('express');
var router = express.Router();

// /* GET topics listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

router.route('/')
  .get((req, res, next) => {
    const users = [
      { _id: 1, name: 'John', age: '22' },
      { _id: 2, name: 'James', age: '19' },
      { _id: 3, name: 'Jane', age: '31' },
      { _id: 5, name: 'Johan', age: '27' },
      { _id: 42, name: 'Pekka', age: '48' },
    ];
    res.send(users);
  })
  .post((req, res) => {
    const data = req.body;
    res.status(201)
      .location('/api/topics/' + 100)
      .send();
  });

module.exports = router;
