import { root } from "../../../utils/root";
import showPassword from "../../../utils/showPassword";
import getDataAuthorization from "../../../utils/getDataAuthorization";
const Auth = () => {
  const html = `
  <div class="auth">
    <div class="auth_sing-in">
      <div class="auth_sing-in_title">
        Sing <span>in</span>
      </div>
      <div >
        <form class="auth_sing-in_form">
          <label for="email">Email</label>
          <i class="far fa-envelope"></i><input type="email" class="auth_sing-in_form-input email" id="email">
          <label for="password">Password</label>
          <i class="fas fa-unlock-alt"></i><input type="password" class="auth_sing-in_form-input password" id="password">
          <i class="far fa-eye-slash"></i>
          <span class="gorget"><a href="#">Forget password?</a></span>
          <button class="auth_sing-in_form-btn" id="submit"><span class="hover">sing</span> <span class="not_hover">in</span></button>
        </form>
      </div>
      <div class="auth_sing-in_social">
        <div class="auth_sing-in_social-item">
      f
        </div>
        <div class="auth_sing-in_social-item">
          i
        </div>
        <div class="auth_sing-in_social-item">
          g
        </div>
      </div>
    </div>
  </div>
  `;

  root.insertAdjacentHTML("beforeend", html);
  showPassword();
  getDataAuthorization();
};

export default Auth;
