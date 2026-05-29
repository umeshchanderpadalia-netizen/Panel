const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const User = require("./models/User");

mongoose.connect(
  process.env.MONGO_URI
)
.then(() => {

  console.log(
    "MongoDB Connected"
  );

})
.catch((error) => {

  console.log(error);
});

const createAdmin =
  async () => {

    try {

      const hashedPassword =
        await bcrypt.hash(
          "admin123",
          10
        );

      const admin =
        new User({

          name:
            "Deepanshu",

          email:
            "admin@getmecab.com",

          password:
            hashedPassword,

          role:
            "admin",
        });

      await admin.save();

      console.log(
        "Admin created successfully"
      );

      process.exit();

    } catch (error) {

      console.log(error);

      process.exit();
    }
  };

createAdmin();