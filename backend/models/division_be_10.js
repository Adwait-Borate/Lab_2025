'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Division_BE_10 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Division_BE_10.init({
    division_id: DataTypes.INTEGER,
    division_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Division_BE_10',
  });
  return Division_BE_10;
};