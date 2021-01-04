'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicalgenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Musicalgenre.belongsToMany(models.dj, { through : "DjMusicalGenres", foreignKey : "musicalgenre_id"});
    }
  };
  Musicalgenre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musicalgenre',
  });
  return Musicalgenre;
};