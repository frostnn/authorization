const SingUpHTML = () => {
  const html = `
    <div class="auth_sing-in "id="content-2">
      <div>
        <form class="auth_sing-in_form">
          <label for="email">Email</label>
          <i class="far fa-envelope email"></i><input type="email" class="auth_sing-in_form-input email" id="email_sing_up">
          <label for="password">Password</label>
          <i class="fas fa-unlock-alt unlock"></i><input type="password" autocomplete="off" class="auth_sing-in_form-input password" id="passwords_sing_up">
          <i class="far fa-eye-slash eye"></i>
          <label for="password">Pe-enter password</label>
          <i class="fas fa-unlock-alt unlock_two"></i><input type="password" autocomplete="off" class="auth_sing-in_form-input password" id="password_sing_up2">
          <i class="far fa-eye-slash eye_two"></i>
          <button class="auth_sing-in_form-btn" id="submit_up"><span class="hover">sing</span> <span class="not_hover">up</span></button>
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
  `;

  return html;
};
export default SingUpHTML;
