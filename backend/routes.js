const {Router} = require('express');
const router = Router();

const {createCity, getCity, getAllCities} = require('./controller');

router.get('/:id', (req, res) => getCity(req, res));

router.post('/', (req, res) => createCity(req, res));
router.get('/', (req, res) => getAllCities(req, res));

// router.put('/', (req, res) => controller.updateRegister(req, res));
// router.delete('/', (req, res) => controller.deteRegister(req, res));

module.exports = router;