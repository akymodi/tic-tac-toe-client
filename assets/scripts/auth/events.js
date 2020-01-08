'use strict'

// links to other folder
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// function that allows user to sign up
const onSignUp = () => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // handle the API response
  // console.log(data)
}

// function that allows user to sign in
const onSignIn = () => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // console.log(data)
}

// function that allows user to change password
const onPwdChange = () => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePwd(data)
    .then(ui.pWdChangeSuccess)
    .catch(ui.pWdChangeFailure)
  // console.log(data)
}

// function that allows user to sign out
const onSignOut = () => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// golable variable for the gameboard
// let gameboard;

// golable variable value for the default player
let currentPlayer = 'X'

// wining patterns that determins a winner based on the combination
const winingPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
  [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// this variable will store and element with all box class in HTML
// const boxClickable = document.getElementById('box').innerHTML = ''

// const boxClickable = $.get('/index.html', function(data) {
//   $('.box').html(data)
// }
// const boxClickable = document.getElementsByClassName('box').innerHTML

const onClick = (event) => {
  const id = event.target.id
  console.log(id)
  // if (document.getElementsByClassName('box').innerHTML === '') {
  $(event.target).text(currentPlayer)
  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'
}
// }

// event handdler jquery
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#pwd-change').on('submit', onPwdChange)
  $('#sign-out').on('submit', onSignOut)
  $('.box').on('click', onClick)
  // $('#box-0').on('click', onClick2)
}

module.exports = {
  addHandlers
}
