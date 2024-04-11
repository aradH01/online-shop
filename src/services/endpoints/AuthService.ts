import BaseApi from '../axios.config';
import {SignInParams} from "@/types/api/abi";

class Auth extends BaseApi {
  constructor() {
    super({suffix: 'v1'});
  }

  postSignIn = (data: SignInParams) =>
      this.$axios.post('token/', data);

}
const AuthService= new Auth();
export default AuthService;
