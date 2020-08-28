import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8caa51db-0dfd-4c99-835c-a166a6c3b232'
  } 
})

export const usersAPI = {
  getUsers(currentPage, pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  Unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response=> {
        return response.data
      })
  },
  Follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response=> {
        return response.data
      })
  }
}

export const profileAPI = {
  getProfile(userId){
    return instance.get('profile/' + userId)
      .then(response=> {
        return response.data
      })
  }
}

export const authAPI = {
  getAuth(){
    return instance.get('auth/me')
      .then(response=> {
        return response.data
      })
  }
}