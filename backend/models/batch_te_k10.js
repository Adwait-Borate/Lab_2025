'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Batch_TE_K10 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Batch_TE_K10.init({
    batch_id: DataTypes.INTEGER,
    batch_name: DataTypes.STRING,
    division_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Batch_TE_K10',
  });
  return Batch_TE_K10;
};