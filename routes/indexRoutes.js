// 1) Primero me traigo express
// nombreModulo = require("modulo")
const express = require("express");
// 2) Pedirle a express el Router
const router = express.Router();
// me traigo el modulo path
const path = require ("path");

// Firma del get => ("/nombreRuta", (req, res) => {})
router.get("/ping", (req, res) => {
  res.send("pon")
});

// Al ingresar a la ruta /index/new renderice un formulario 
// con los siguientes datos y un botón de guardar:
router.get("/index/new", (req, res) => {
  // res.send(__dirname);
  res.sendFile(path.join(__dirname, "..", "", "new.html"));
});

router.get("/index/test", (req, res) => {
  // res.send(__dirname);
  res.sendFile(path.join(__dirname, "..", "", "test.html"));
 
});

router.get("/index", (req, res) => {
  // res.send(__dirname);
  res.sendFile(path.join(__dirname, "..", "", "index.html"));
    
});

router.get("/index/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "", "edit.html"));
});

module.exports = router;