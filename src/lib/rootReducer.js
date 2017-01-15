import { combineReducers } from 'redux'

import { username } from '../modules/Username/Username.reducer'
import { pin, pinDummy } from '../modules/PinNumber/PinNumber.reducer'
// import { nextButtonVisible } from '../modules/NextButton/NextButton.reducer'
// import { skipButtonVisible } from '../modules/SkipButton/SkipButton.reducer'
// import * as PasswordStates from '../modules/Password/Password.reducer'
// import { disclaimerAccepted } from '../modules/Disclaimer/Disclaimer.reducer'
// import * as ReviewDetailsStates from '../modules/ReviewDetails/ReviewDetails.reducer'
// import * as PasswordValidation from '../modules/Password/PasswordValidation/PasswordValidation.reducer'
// import * as Loader from '../modules/Loader/Loader.reducer'
// import * as WarningModal from '../modules/WarningModal/WarningModal.reducer'
// import * as ErrorModal from '../modules/ErrorModal/ErrorModal.reducer'
// import * as Login from '../modules/Login/Login.reducer'
// import * as CachedUsers from '../modules/CachedUsers/CachedUsers.reducer'
// import { user } from '../modules/User/User.reducer'
// import { whiteOverlayVisible, lostFocus, gainedFocus } from '../modules/Landing.reducer'
// import routes from './routesReducer'
import { alert } from '../modules/Alert/Alert.reducer'

const store = combineReducers({
  username,
  pin,
  // pinDummy,
  // password: combineReducers({
  //   inputState: PasswordStates.inputState,
  //   password: PasswordStates.password,
  //   passwordRepeat: PasswordStates.passwordRepeat,
  //   notification: PasswordStates.notification,
  //   validation: combineReducers({
  //     passwordValid: PasswordValidation.passwordValid,
  //     upperCaseChar: PasswordValidation.upperCaseChar,
  //     lowerCaseChar: PasswordValidation.lowerCaseChar,
  //     number: PasswordValidation.number,
  //     characterLength: PasswordValidation.characterLength
  //   })
  // }),
  //
  // reviewDetails: combineReducers({
  //   details: ReviewDetailsStates.details,
  //   view: ReviewDetailsStates.view
  // }),
  //
  // login: combineReducers({
  //   viewPassword: Login.viewPassword,
  //   viewPIN: Login.viewPIN,
  //   username: Login.username,
  //   password: Login.password,
  //   pin: Login.pin,
  //   pinDummy: Login.pinDummy,
  //   showCachedUsers: Login.showCachedUsers
  // }),
  //
  // nextButtonVisible,
  // skipButtonVisible,
  // loader: combineReducers({
  //   loading: Loader.loading,
  //   message: Loader.message,
  //   style: Loader.style
  // }),
  // warningModal: combineReducers({
  //   visible: WarningModal.visible,
  //   module: WarningModal.module,
  //   title: WarningModal.title,
  //   message: WarningModal.message
  // }),
  // errorModal: combineReducers({
  //   visible: ErrorModal.visible,
  //   message: ErrorModal.message
  // }),
  // cachedUsers: combineReducers({
  //   users: CachedUsers.users,
  //   selectedUserToLogin: CachedUsers.selectedUserToLogin,
  //   userToDeleteFromUserCache: CachedUsers.userToDeleteFromUserCache
  // }),
  // landing: combineReducers({
  //   disclaimerAccepted,
  //   whiteOverlayVisible,
  //   lostFocus,
  //   gainedFocus
  // }),
  // user,
  // routes,
  alert: alert
})

export default store
