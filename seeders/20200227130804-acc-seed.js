'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accounts', 
      [
        {
          username: 'isrotrip',
          password: '11111',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'edison',
          password: '22222',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'zedaeen',
          password: '33333',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'afifah',
          password: '44444',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
