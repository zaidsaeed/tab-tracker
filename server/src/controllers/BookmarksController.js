const {
  Bookmark,
  Song
} = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const { songId } = req.query
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
      const userId = req.user.id
      const { songId } = req.body
      const bookmark = await Bookmark.findOne({
        where: { SongId: songId, UserId: userId }
      })
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
      const userId = req.user.dataValues.id
      const { bookmarkId } = req.params
      const bookmark = await Bookmark.findOne({
        where: { id: bookmarkId, UserId: userId }
      })
      if (!bookmark) {
        return res
          .status(403)
          .send({ error: 'you do not have access to this bookmark' })
      }
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
