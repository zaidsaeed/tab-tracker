const {
  Bookmark
} = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmark = await Bookmark.findOne({
        where: { SongId: songId, UserId: userId }
      })
      res.send(bookmark)
    } catch (err) {
      res
        .status(500)
        .send({ error: 'An error has occurred trying to fetch the bookmarks' })
    }
  }
}
