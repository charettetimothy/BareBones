import axios from 'axios'

export default {
  // Gets all the tables
  getTables: function () {
    return axios.get('/api/tables')
  },
  // Gets the waitlist
  getWaitlist: function () {
    return axios.get('/api/waitlist')
  },
  userSignUp: function (Users) {
    console.log(Users + "this is api.js")
  return axios.post('/api/authRoutes/signup', Users)
  }
}