import { email, password, root, submit } from "../../../utils/root";
import showPassword from "../../../utils/showPassword";
import {
  getDataAuthorization,
  getDataRegirst,
} from "../../../utils/getDataAuthorization";
import SingInHTML from "../SingInHTML/SingInHTML";
import SingUpHTML from "../SingUpHTML/SingUpHTML";

const Auth = () => {
  const html = `
  <div class="auth">
    <input type="radio" name="tab-btn" id="tab-btn-1" checked>
    <label for="tab-btn-1" class="auth_sing-in_title btn-1">Login</label>
    <input type="radio" name="tab-btn" id="tab-btn-2" >
    <label for="tab-btn-2" class="auth_sing-in_title btn-2">Sing <span>up</span></label>
    ${SingInHTML()}
    ${SingUpHTML()}
  </div>
  `;

  root.insertAdjacentHTML("beforeend", html);
  showPassword();
  getDataAuthorization();
  getDataRegirst();
};

export default Auth;
