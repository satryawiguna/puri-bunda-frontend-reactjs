const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.user);
    }
  }

  Role.init(
    {
      title: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "role",
      underscored: true
    }
  );

  return Role;
};
