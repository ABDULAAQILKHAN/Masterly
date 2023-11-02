import path from '../path';
import { useSelector } from 'react-redux'

const AuthConfig = ()=>{
    const user = useSelector((state)=> state.user)
    const auth = {
        headers: {
        "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
          Authorization: `Bearer ${user.token}`,
        }
      };
      return auth;
}
export default AuthConfig;