var express = require('express');
var router = express.Router();

//viittaus palveluun, joka käyttää tietokantaa
var palvelu = require("./topics.controller")

// /* GET topics listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


// router.route('/')
//   .get((req, res, next) => {
//     const users = [
//       { _id: 1, name: 'John', age: '22' },
//       { _id: 2, name: 'James', age: '19' },
//       { _id: 3, name: 'Jane', age: '31' },
//       { _id: 5, name: 'Johan', age: '27' },
//       { _id: 42, name: 'Pekka', age: '48' },
//     ];
//     res.send(users);
//   })
//   .post((req, res) => {
//     const data = req.body;
//     res.status(201)
//       .location('/api/topics/' + 100)
//       .send();
//   });



/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
});

// /api/users -reitit tarjoavat html:n sijaan jsonia
router.get('/api/topics', function (req, res) {
  // Tällä testataan vain että pyyntö toimii:
  //console.log("/api/topics toimii");
  palvelu.haeKaikki(function (results) {
    res.json(results);
  });
});

router.post('/api/topics', function (req, res) {
  palvelu.createTopic(req, function () {
      res.status(201)
          .end();
  });
});


//PUT toiminnallisuus
router.put('/api/topics/:id', function (req, res) {
  palvelu.paivitaTopic(req, function () {
    res.status(200)
      .end();
  });
})

module.exports = router;
