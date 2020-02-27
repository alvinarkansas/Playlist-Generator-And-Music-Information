'use strict';
module.exports = (sequelize, DataTypes) => {
  class Song extends sequelize.Sequelize.Model {}

  Song.init({
    title: DataTypes.STRING,
    artist_name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    mood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song'
  })
  
  Song.associate = function(models) {
    Song.belongsToMany(models.Playlist, { through: 'PlaylistSong' })
  };
  return Song;
};