const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Token)
      this.hasOne(models.Contact)
      this.belongsTo(models.Role)
      this.hasMany(model.Movie)
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
  })

  return User
}
