// 1) Me traigo express
const express = require("express");
// 2) Me traigo bodyparser
const bodyParser = require("body-parser");
// 3) Me traigo las rutas que necesito "escuchar"
const apiRoutes = require("./routes/apiRoutes");
const indexRoutes = require("./routes/indexRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const vendorRoutes = require("./routes/vendorRoutes");
const path = require ("path");

// 4) Defino mi aplicacion con express
const app = express();

// 5) Le digo a mi servidor que use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 6) Le digo a mi servidor que cuando el cliente haga una peticion
// vaya a buscar la ruta correspondiente
// app.use("/", routes);
// agrego esto porque no tengo variables de entorno (extensions.js?)
app.listen(3000, function(){console.log('server listening')});

// app.use("/admin", adminRoutes)
// app.use("/vendor", vendorRoutes)

// esta es la ruta de los archivos estaticos
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api", apiRoutes);
app.use("/", indexRoutes);

module.exports = app;