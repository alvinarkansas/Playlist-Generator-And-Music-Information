'use strict';
module.exports = (sequelize, DataTypes) => {
  class PlaylistSong extends sequelize.Sequelize.Model {}

  PlaylistSong.init({
    PlaylistId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistSong'
  })
  
  PlaylistSong.associate = function(models) {
    PlaylistSong.belongsTo(models.Song);
    PlaylistSong.belongsTo(models.Playlist);
  };
  return PlaylistSong;
};