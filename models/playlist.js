'use strict';
module.exports = (sequelize, DataTypes) => {
  class Playlist extends sequelize.Sequelize.Model {}

  Playlist.init({
    playlist_name: DataTypes.STRING,
    description: DataTypes.STRING,
    AccountId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playlist'
  })

  Playlist.associate = function(models) {
    Playlist.belongsToMany(models.Song, { through: 'PlaylistSong' })
    Playlist.belongsTo(models.Account)
  };
  return Playlist;
};