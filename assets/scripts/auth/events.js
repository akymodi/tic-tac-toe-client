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

// event handdler jquery
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#pwd-change').on('submit', onPwdChange)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
