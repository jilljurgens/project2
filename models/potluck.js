module.exports = function(sequelize, DataTypes) {
  var PotLuck = sequelize.define("PotLuck", {
    
    date: DataTypes.DATE,
    guestEmails: DataTypes.STRING,
    hostedAt: DataTypes.STRING,
    theme: DataTypes.STRING,
    createdAtDateOnly: DataTypes.STRING

  });

  PotLuck.associate = function(models) {
   models.PotLuck.belongsTo(models.User);
 
  };
  return PotLuck;
};