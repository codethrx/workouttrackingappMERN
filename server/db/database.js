const mongoose = require("mongoose");
const connectDB = async (app, PORT) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(
        `Server started at PORT#${PORT} and connected to DB host named as ${connection.connection.host}`
      );
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = connectDB;
