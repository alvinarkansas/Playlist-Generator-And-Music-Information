'use strict';
module.exports = (sequelize, DataTypes) => {
  class Playlist extends sequelize.Sequelize.Model {}

  Playlist.init({
    playlist_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmpty(playlist_name) {
          if (!playlist_name) {
            throw new Error('Please give name to your playlist')
          }
        }
      }
    },
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