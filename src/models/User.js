const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.token);
      this.hasOne(models.contact);
      this.belongsTo(models.role);
      this.hasMany(models.movie);
    }
  }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    email_verified: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: "user",
    underscored: true
  });

  return User;
};
