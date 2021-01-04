'use strict';
const clubs = require("../database/seeds/1-club");
module.exports = {
  up: async (queryInterface, Sequelize) => {
 await queryInterface.bulkInsert('clubs', clubs, {});

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
     await queryInterface.bulkDelete('clubs', null, {});
     
  }
};
