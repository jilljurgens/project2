module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  });

User.associate = function(models) {
   models.User.belongsToMany(models.Potluck, { through: models.UserPotluck, foriegnKey: "potluck_id" })
    
  };

  // Users.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Users.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};