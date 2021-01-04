'use strict';
const djs = require("../database/seeds/2-dj");
module.exports = {
  up: async (queryInterface, Sequelize) => {
 await queryInterface.bulkInsert('djs', djs, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('djs', null, {});
     
  }
};
