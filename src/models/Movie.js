const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      this.belongsTo(models.User)
    }
  }

  Movie.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      release_date: DataTypes.DATE,
      runtime: DataTypes.STRING,
      revenue: DataTypes.INTEGER,
      poster: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'movie',
      underscored: true,
    },
  );

  return Movie;
};
