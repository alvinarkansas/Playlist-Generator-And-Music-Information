'use strict';
const fs = require('fs');

let songs = JSON.parse(fs.readFileSync('./songs-to-seed/songs.json', 'utf8'));
for (let i = 0; i < songs.length; i++) {
  songs[i].createdAt = new Date();
  songs[i].updatedAt = new Date();
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', songs, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
