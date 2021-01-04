'use strict';
const musical_genres = require("../database/seeds/20200901155256-musical_genres");
module.exports = {
  up: async (queryInterface, Sequelize) => {
 await queryInterface.bulkInsert('musicalgenres', musical_genres, {});

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
     await queryInterface.bulkDelete('musicalgenres', null, {});
     
  }
};
