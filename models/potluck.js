module.exports = function(sequelize, DataTypes) {
 
  var Potluck = sequelize.define("Potluck", {
   
      date: DataTypes.DATE,
      guestEmails: DataTypes.STRING,

 });
  
  // var User = sequelize.define("User", {

  //     name: DataTypes.STRING,
  //     email: DataTypes.STRING,
  //     username: DataTypes.STRING,
  //     password: DataTypes.STRING,
  //     salt: DataTypes.STRING
  // });

  // var UserPotluck = sequelize.define("UserPotluck", {
 Potluck.associate = function(models) {
  console.log(models);
   models.Potluck.belongsToMany(models.User, { through: models.UserPotluck, foriegnKey: "user_id" })
    
  };

  //     food: DataTypes.STRINGfor
    

 // }); 
 return Potluck;
};





 
