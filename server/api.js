const express = require('express');
const sequelize = require('./sequelize');
const router = express.Router();
const Usuarios = sequelize.import('Usuarios', require("../modelos/Usuarios"));
const Autos = sequelize.import('users', require("../modelos/Autos"));


router.get('/', (req, res) =>{
    res.send('api works');
});


sequelize.authenticate().then(() => {
    console.log('La conección ha sido exitosa.');
})
.catch(err => {
    console.error('No se a podido conetar a la base de datos: ', err);
});


router.get('/entradas', (req, res, next) =>{
    
    Autos.findAll().then(autos =>{
        res.status(200)
        .json({
            status: 'success',
            data: autos,
            message: 'retornadas todos los autos!'
        });
    })
    .catch(function (err) {
    console.log("ups algo ha salido mal :C")
    return next(err);
    });
});
router.get('/entradas/users', (req, res, next) =>{
    
    Usuarios.findAll().then(users =>{
        res.status(200)
        .json({
            status: 'success',
            data:users,
            message: 'retornadas todos los usuarios!'
        });
    })
    .catch(function (err) {
    console.log("ups algo ha salido mal :C")
    return next(err);
    });
});

router.post('/delauto', (req, res, next) =>{
    Autos.destroy({
        where: {
        auto: req.body.auto 
        }
    }).then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} auto`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
    // DELETE FROM Autos WHERE auto = auto;
    });



router.post('/deluser', (req, res, next) =>{
    Usuarios.destroy({
        where: {
        Rut: req.body.user 
        }
    }).then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} usuario`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
    // DELETE FROM Autos WHERE Rut = user;
    });

Usuarios.findAll(
    {
        where: {
        Auto: 2
        }
    }
).then(users =>{
    for(i=0;i<users.length;i++){    
    console.log(users[i].dataValues);
    }})


router.post('/insusers', (req, res, next) =>{
    Usuarios.create({
        Rut: req.body.Rut,
        Nombre: req.body.Nombre,
        Auto: req.body.Auto
    }).then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Udated ${result.rowCount} usuario`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
});

router.post('/insautos', (req, res, next) =>{
    Autos.create({
        auto: req.body.auto,
        marca: req.body.marca,
        modelo: req.body.modelo,
        anno: req.body.anno
    }).then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Udated ${result.rowCount} auto`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
});

router.post('/updusers', (req, res, next) =>{
    Usuarios.update({
        Rut: req.body.Rut,
        Nombre: req.body.Nombre,
        Auto: req.body.Auto
    }, {
        where: {
        Rut: req.body.Rut
        }
    });
});
router.post('/updautos', (req, res, next) =>{
    Autos.update({
        auto: req.body.auto,
        marca: req.body.marca,
        modelo: req.body.modelo,
        anno: req.body.anno
    }, {
        where: {
        auto: req.body.auto
        }
    });
});

module.exports = router;