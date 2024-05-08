import axios from 'axios';
import path from './path';

//const user = useSelector((state)=> state.user)

    let  data  = JSON.parse(localStorage.getItem("local"));
    console.log("token",data?.token)
    const instance = axios.create({
        baseURL: path,
        headers: {
            'Authorization': `Bearer ${data?.token}`,
        }
    })
    
/*instance.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWFxaWxwcm85OUBnbWFpbC5jb20iLCJpYXQiOjE3MTUwMDc0NzAsImV4cCI6MTcxNTA5Mzg3MH0.-2sM9KmSbH5_n6n0t-VLnWOKauckjdO0g-kvuzAMu0s";*/

export default instance;