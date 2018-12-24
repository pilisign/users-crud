require("dotenv").config({ path: "variables.env" });

// Start!
const app = require("./app");

app.set("port", process.env.PORT || 7777);

const server = app.listen(app.get("port"), () => {
  console.log(`Server running → PORT ${server.address().port}`);
});

