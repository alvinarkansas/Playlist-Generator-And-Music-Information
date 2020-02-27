'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Playlists', ['AccountId'], {
      type: 'foreign key',
      name: 'custom_fkey_AccountId',
      references: { 
        table: 'Accounts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Playlists', 'custom_fkey_AccountId')
  }
};
