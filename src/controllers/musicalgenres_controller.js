const { Musicalgenre } = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    // Your code here
    return await Musicalgenre.findAll();
  },
};

module.exports = musicalGenresController;
