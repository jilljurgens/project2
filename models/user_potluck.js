module.exports = function(sequelize, DataTypes) {
  var UserPotluck = sequelize.define("UserPotluck", {

    food: DataTypes.STRING


 });
  return UserPotluck;
}