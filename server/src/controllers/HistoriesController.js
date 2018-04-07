const {
  History,
  Song
} = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.dataValues.id
      const histories = await History.findAll({
        where: { userId: userId },
        include: [{ model: Song }]
      })
        .map(history => history.toJSON())
        .map(history => _.extend({}, history.Song, history))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res
        .status(500)
        .send({ error: 'An error has occurred trying to fetch the bookmarks' })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.dataValues.id
      const { songId } = req.body
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      console.log(err)
      res
        .status(500)
        .send({ error: 'An error has occurred trying to create the bookmark' })
    }
  }
}
