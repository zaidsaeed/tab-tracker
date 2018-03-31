const {
  Bookmark,
  Song
} = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      console.log('req', req)
      const where = { userId: userId }
      if (songId) {
        where.SongId = songId
      }
      const bookmark = await Bookmark.findAll({
        where: where,
        include: [{ model: Song }]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({}, bookmark.Song, bookmark))
      res.send(bookmark)
    } catch (err) {
      res
        .status(500)
        .send({ error: 'An error has occurred trying to fetch the bookmarks' })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body
      const bookmark = await Bookmark.findOne({
        where: { SongId: songId, UserId: userId }
      })
      console.log('bookmark', bookmark)
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      console.log(err)
      res
        .status(500)
        .send({ error: 'An error has occurred trying to create the bookmark' })
    }
  },
  async delete (req, res) {
    try {
      const { bookmarkId } = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res
        .status(500)
        .send({ error: 'An error has occurred trying to delete the bookmark' })
    }
  }
}
