import { User } from "../entities/user";
import { LoginRequestData } from "./requests/login/loginRequestData";
import { LoginResponseData } from "./requests/login/loginResponseData";
import { ResetPasswordRequestData } from "./requests/resetPassword/resetPasswordRequestData";
import { SignupRequestData } from "./requests/signup/signupRequestData";
import { UpdatePasswordRequestData } from "./requests/updatePassword/updatePasswordRequestData";
import { ServiceBase } from "./service.base";

class UserService extends ServiceBase {
  prefix = "/user";
  async whoAmI() {
    return await this.get<User>("/me");
  }

  login(data: LoginRequestData) {
    return this.post<LoginResponseData>("/login", data);
  }

  resetPassword(data: ResetPasswordRequestData) {
    return this.post<void>("/resetPassword", data)
  }
  updatePassword(data: UpdatePasswordRequestData) {
    return this.post("/updatePassword", data)
  }
  logout() {
    return this.post<void>("/logout");
  }
}
const userService = new UserService();
export default userService;
