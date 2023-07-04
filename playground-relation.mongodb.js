use('school');
db.address.insertMany(
  [
      {
          "name": "Bob",
          "blk_no": 22,
          "street" : "dewey street",
          "city" : "United States of America"
      },
      {
          "name": "Jack",
          "blk_no": 25,
          "street" : "gordon street",
          "city" : "New Zealand"
      }
  ]
);

use('school');
db.userInfo.insertMany(
  [
      {
          "contact_name": "Bob",
          "age": 27,
          "sex" : "male",
          "citizenship" : "Filipino"
      },
      {
          "contact_name": "Jack",
          "age": 22,
          "sex" : "male",
          "citizenship" : "Filipino"
      }
  ]
);

use('school');
db.userInfo.aggregate([
  { $lookup:
      {
         from: "address",
         localField: "contact_name",
         foreignField: "name",
         as: "address"
      }
  }
]).pretty();