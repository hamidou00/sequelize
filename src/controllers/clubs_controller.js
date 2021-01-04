const { Club } = require("../models");

const clubsController = {
  getAllClubs: async () => {
    // Your code here
   return  await Club.findAll();
  },
  getClub: async (name) => {
    // Your code here
    return await Club.findOne({where: {name}});
  },
  addClub: async (data) => {
    // Your code here
    return await Club.create(data);
  },
};

module.exports = clubsController;
