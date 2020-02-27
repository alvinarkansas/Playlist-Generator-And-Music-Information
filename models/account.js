'use strict';
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model {}

  Account.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account'
  })
  
  Account.associate = function(models) {
    Account.hasMany(models.Playlist)
  };
  return Account;
};