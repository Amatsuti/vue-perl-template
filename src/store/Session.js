import axios from 'axios'

const axiosInst = axios.create({
  baseURL: process.env.VUE_APP_HOST_URL,
  withCredentials: true,
})
const config = () => {
  return {
    // onUploadProgress: progressEvent => {
    // },
    // onDownloadProgress: progressEvent => {
    // },
  }  
}

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  fetch({ commit }, data){
    const params = new URLSearchParams()
    params.append('param', JSON.stringify(data))
    return axiosInst
      .post('/test.cgi', params, config(commit))
      .then((response) => {
        return response.data
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
