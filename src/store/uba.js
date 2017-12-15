import firebaseConfig from '../../firebase.config.js'
import firebase from 'firebase'
import router from '../router'
import axios from 'axios'

// Your firebase config
let config = firebaseConfig

firebase.initializeApp(config)

var today = new Date()
var dd = today.getDate()
var mm = today.getMonth() + 1 // January is 0!
var yyyy = today.getFullYear()
var h = today.getHours()
var m = today.getMinutes()
var s = today.getSeconds()
today = dd + '/' + mm + '/' + yyyy + ' ' + h + ':' + m + ':' + s
export default {
  state: {
    isReady: false,
    user: {},
    latitude: 0,
    longitude: 0,
    driver: {}
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    isReady: state => state.isReady,
    latitude: state => state.latitude,
    longitude: state => state.longitude,
    driver: state => state.driver
  },
  mutations: {
    setReady (state) {
      state.isReady = true
    },
    setUser (state, user) {
      state.user = user
    },
    setLocation (state, location) {
      state.latitude = location.lat
      state.longitude = location.lng
      console.log(state.latitude)
    },
    setDriver (state, uid) {
      axios.get('https://u-ba-d180c.firebaseio.com/call.json').then((res) => {
        // state.user = res.data
        let arr = []
        for (var index in res.data) {
          if (res.data.hasOwnProperty(index)) {
            arr.push({
              ...res.data[index],
              firebaseID: index
            })
          }
        }
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].firebaseID === uid) {
            state.driver = arr[i]
            break
          } else {
            state.driver = {}
          }
        }
      })
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
    setLocation (store, location) {
      store.commit('setLocation', location)
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
    },
    setDriver (store, uid) {
      store.commit('setDriver', uid)
    },
    setStat (state, data) {
      firebase.database().ref('call/' + data.uid + '/state').set(data.state)
    }
  }
}

function getLocation () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  }
}
function showPosition (position) {
  firebase.auth().onAuthStateChanged((user) => {
    firebase.database().ref('call/' + user.uid).set({
      userID: user.uid,
      name: user.displayName,
      photoURL: user.photoURL,
      Latitude: position.coords.latitude,
      Longitude: position.coords.longitude,
      datetime: today,
      state: 'wait',
      driver: 'none',
      cost: 0,
      time: 0
    })
    router.push('/loader')
  })
}
