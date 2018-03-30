module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})
  Bookmark.associate = function (models) {
    Bookmark.User = Bookmark.belongsTo(models.User)
    Bookmark.Song = Bookmark.belongsTo(models.Song)
  }
  return Bookmark
}
