const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/policies/AuthenticationControllerPolicy.js')
const SongsController = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/controllers/SongsController.js')
const BookmarksController = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/controllers/BookmarksController.js')
const HistorysController = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/controllers/HistorysController.js')
var cors = require('cors')

module.exports = app => {
  app.options('/register', cors())
  app.post(
    '/register',
    cors(),
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)

  app.get('/songs/:songId', SongsController.show)

  app.put('/songs/:songId', SongsController.put)

  app.post('/songs', SongsController.post)

  app.get('/bookmarks', BookmarksController.index)

  app.post('/bookmarks', BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)

  app.get('/histories', HistorysController.index)

  app.post('/histories', HistorysController.post)
}
