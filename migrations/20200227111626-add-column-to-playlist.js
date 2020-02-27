'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Playlists', 'AccountId', Sequelize.INTEGER, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Playlists', 'AccountId')
  }
};
