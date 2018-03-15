const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/policies/AuthenticationControllerPolicy.js')
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
}
