'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./gameBoard/events')
// const clickEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
  // $('#game-message').hide()
  // clickEvents.addHandlers()
})
