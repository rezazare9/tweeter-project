import { getAxiosInstance } from "./api"
// import {getAxiosInstanceApi, getAxiosInstanceJsonServer} from "./api";


export const getAllTweets = (callback)=>{
  getAxiosInstance().get("/tweets")
  .then(response => {
      const data = response.data
      callback(true,data)
  }).catch(error => {
      callback(false,error)
  })
}
export const getHashTags = (callback)=>{
  getAxiosInstance().get("/hashTags")
  .then(response => {
      const data = response.data
      callback(true,data)
  }).catch(error => {
      callback(false,error)
  })
}
export const getUsers = (callback)=>{
  getAxiosInstance().get("/users")
  .then(response => {
      const data = response.data
      callback(true,data)
  }).catch(error => {
      callback(false,error)
  })
}
export const newTweetRequest = (data,callback)=>{
  getAxiosInstance().post("/tweets",data)
  .then(res => {
      callback(true)
  }).catch(error => {
      callback(false)
  })
}
// export const getAllTweets = (callback) => {
//   getAxiosInstanceApi().post("getAllTweet")
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const getTweetsByHashTagRequest = (hashTag ,callback) => {
//   getAxiosInstanceApi().post("getAllTweet" , {hashTag})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const getTweetsByUserRequest = (user ,callback) => {
//   getAxiosInstanceApi().post("getAllTweet" , {user})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };


// export const getHashTags = (callback) => {
//   getAxiosInstanceApi().get("getAllHashTags")
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const getUsers = (callback) => {
//   getAxiosInstanceApi().get("getAllUser")
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const newTweetRequest = (data, callback) => {
//   getAxiosInstanceApi().post("newTweet", data)
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   });
// };
// export const likeTweetRequest = (id, callback) => {
//   getAxiosInstanceApi().get("likeTweet/"+id)
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   });
// };