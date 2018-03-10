const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('/Users/zaidsaeed/Desktop/tab-tracker/server/src/policies/AuthenticationControllerPolicy.js')
module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/login', AuthenticationController.login)
}
