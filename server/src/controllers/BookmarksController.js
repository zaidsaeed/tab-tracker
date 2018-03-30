const {
  Bookmark
} = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmark = await Bookmark.findOne({
        where: { songId: songId, userId: userId }
      })
      console.log(bookmark)
      res.send(bookmark)
    } catch (err) {
      res
        .status(500)
        .send({ error: 'An error has occurred trying to fetch the bookmarks' })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      await Bookmark.create(bookmark)
      res.send(bookmark)
    } catch (err) {
      res
        .status(500)
        .send({ error: 'An error has occurred trying to create the bookmark' })
    }
  },
  async delete (req, res) {
    try {
      console.log('hey')
      const { bookmarkId } = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res
        .status(500)
        .send({ error: 'An error has occurred trying to delete the bookmark' })
    }
  }
}