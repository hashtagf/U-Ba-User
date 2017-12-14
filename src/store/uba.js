import firebaseConfig from '../../firebase.config.js'
import firebase from 'firebase'
import router from '../router'

// Your firebase config
let config = firebaseConfig

firebase.initializeApp(config)

export default {
  state: {
    isReady: false,
    user: {},
    latitude: 0,
    longitude: 0
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    isReady: state => state.isReady,
    latitude: state => state.latitude,
    longitude: state => state.longitudelongitude
  },
  mutations: {
    setReady (state) {
      state.isReady = true
    },
    setUser (state, user) {
      state.user = user
    },
    setLatitude (state, l) {
      state.latitude = l
    },
    setLongitude (state, l) {
      state.longitude = l
    }
  },
  actions: {
    init ({ commit, dispatch, bindFirebaseRef }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          let { displayName, uid } = user
          let profile = {
            displayName,
            uid,
            fb: user.providerData[0]
          }
          commit('setUser', profile)
          router.push('/Home')
        } else {
          commit('setUser', null)
          router.push('/')
          commit('setReady')
        }
      })
    },
    login () {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      firebase.auth().signOut()
    },
    call () {
      getLocation()
    }
  }
}
function getLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  }
}
var today = new Date()
var dd = today.getDate()
var mm = today.getMonth() + 1 // January is 0!
var yyyy = today.getFullYear()
var h = today.getHours()
var m = today.getMinutes()
var s = today.getSeconds()
today = dd + '/' + mm + '/' + yyyy + ' ' + h + ':' + m + ':' + s
function showPosition (position) {
  firebase.auth().onAuthStateChanged((user) => {
    firebase.database().ref('call/' + '').push({
      userID: user.uid,
      name: user.displayName,
      photoURL: user.photoURL,
      Latitude: position.coords.latitude,
      Longitude: position.coords.longitude,
      time: today
    })
    router.push('/loader')
  })
}
