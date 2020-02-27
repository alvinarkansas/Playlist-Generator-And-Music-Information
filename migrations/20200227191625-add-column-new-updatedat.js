'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Playlists', 'LastUpdate', Sequelize.STRING, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Playlists', 'LastUpdate')
  }
};
