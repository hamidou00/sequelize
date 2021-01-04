'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dj.belongsTo(models.Club, { foreignKey: 'club_id' });
      dj.belongsToMany(models.Musicalgenre, { through : "DjMusicalGenres", foreignKey : "dj_id"});
    }
  };
  dj.init({
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    // },
    url_name: DataTypes.STRING,
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    soundcloud: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    spotify: DataTypes.STRING,
    beatport: DataTypes.STRING,
    mixcloud: DataTypes.STRING,
    youtube: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dj',
  });
  return dj;
};