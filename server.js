const app = require("./src/app");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

app.listen(PORT, "0.0.0.0", () => console.log(`Running on port ${PORT}`));

