var { Router } = require('express');

const router = new Router();

router.get('/', function (req, res) {
    res.send(courses);
});

router.get('/:id', function (req, res) {
  const course = courses.find(c => c.id === parseInt(req.params.id));

  if (!course)
    res.status(404).send('Pet not found!');
  else 
    res.send(course); 
});

router.post('', (req, res) => {
  if (!req.body.name) {
    res.status(400).send('Pls insert a name!');
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(course);
  res.send(courses);
});

router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course){
    res.status(404).send('Pet not found!');
    return;
  }
  else if (!req.body.name) {
    res.status(400).send('Pls insert a name!');
    return;
  } 
  course.name = req.body.name;
  res.send(courses);
});

router.delete('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course){
    res.status(404).send('Pet not found!');
    retunr
  }

  courses.splice(courses.indexOf(course), 1);
  res.send(courses);
});

const courses = [
    {id: 1, name: 'CACHORRO'},
    {id: 2, name: 'PERIQUITO'},
    {id: 3, name: 'GATO'}
  ];

module.exports = router;