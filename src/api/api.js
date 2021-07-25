import Axios from 'axios'


export const getAxiosInstance=()=>{

 return Axios.create({
    baseURL:"http://localhost:3000",
    headers:{
      API_KEY:"jkadsfliugwlfjblkiefuweiocbskdjbskdu"
  }
})
};

export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "https://twitterapi.liara.run/",
    headers: {
      API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    }
  });
};
export const getAxiosInstanceAuth = () => {
  return Axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      // API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    }
  });
};
export const getAxiosInstanceApi = () => {
  return Axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      'x-auth-token': localStorage.getItem("x-auth-token")
    }
  });
};

