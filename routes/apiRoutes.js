const express = require("express");
const router = express.Router();
const path = require ("path");

const users = [
    {
      id: 1,
      nombre: "Ada",
      apellido: "Lovelace",
      telefono: "12345678",
      email: "contacto@gmail.com"
    },
    {
      id: 2,
      nombre: "Grace",
      apellido: "Hopper",
      telefono: "087654321",
      email: "contacto@hotmail.com"
    },
    {
      id: 3,
      nombre: "Margaret",
      apellido: "Hamilton",
      telefono: "087654566",
      email: "contacto@nasa.com"
      }
  ];

let contador = 4;

router.get('/index', function(req, res) {
    let search = req.query.search;
    // chequeo que search esté definido y su longetud sea mayor a 0
    if (search && search.length > 0) {
        let usersFiltrados = [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].nombre.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                usersFiltrados.push(users[i]);
            }
        }
        return res.json(usersFiltrados);
    }

    res.json(users);
});

router.get('/index/:id', function(req, res) {
    const id = req.params.id;

    const user = users.find(u => u.id == id);

    res.json(user);
});


router.post('/index', function (req, res) {
    // la info que me llega desde la web
    // {
    //     nombre: '',
    //     apellido: '',
    //     telefono: '',
    //     email: ''
    // }
    const newUser = req.body;

    if (newUser.nombre.length > 30) {
        return res.status(400).end('error');
    }

    newUser.id = contador++;

    // agrego el usuario al array global
    users.push(newUser);

    // le respondemos con el array de objetos
    res.json(newUser);
});


router.put('/index/:id', function(req, res) {
    const id = req.params.id;
    const editUser = req.body;
    // buscar usuario a editar
    const user = users.find(u => u.id == id);
    // validar
    // editamos propiedades
    user.nombre = editUser.nombre;
    user.apellido = editUser.apelllido;
    user.telefono = editUser.telefono;
    user.email = editUser.email;
    // buscar en que ubicacion esta el usuario
    // borro el usuario del array users
    // mandar una respuesta
    res.json(users);
});

router.delete('/index/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users.splice(users.findIndex(u => u.id === userId), 1);
    res.json(users);
});

router.get("/index/:id", (req, res) => {
    res.json(users.find(u => u.id === parseInt(req.params.id)));
  });

module.exports = router;