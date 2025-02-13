'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subjects_SE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subjects_SE.init({
    subject_id: DataTypes.INTEGER,
    subject_name: DataTypes.STRING,
    teacher_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subjects_SE',
  });
  return Subjects_SE;
};