import axios from "axios";
import { getCookie } from "cookies-next";



const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'Content-Type': "application/json"
    }
});


axiosClient.interceptors.request.use(
    async function (config) {
        const token = await getCookie('token');
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default axiosClient;







































// import axios from "axios";
// import cookies  from "cookies-next";

// const axiosClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
//     headers: {
//         'Content-Type': "application/json"
//     }
// });

// axios.interceptors.request.use(
//     async function (config) {
//         const token =  cookies.getCookie('token');
//         if (token) {
//             config.headers.Authorization = `${token}`;
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// axios.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         console.log("Error --->",error)
//         return Promise.reject(error);
//     }
// );

// export default axiosClient;