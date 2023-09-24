const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gofood:12345@cluster0.3n5oolm.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
    mongoose.set('strictQuery', false);
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log("---", err);
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food_item");
      fetched_data.find({}).toArray(function( err, data){
        if(err) console.log(err);
        else console.log()
      })
    }
  });
};

module.exports = mongoDB;
