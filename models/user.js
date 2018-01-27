module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNo: DataTypes.STRING
  });

  User.associate = function(models) {
   
     };
  return User;
};