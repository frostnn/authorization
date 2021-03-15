import { authContent, root } from "../../../utils/root";

const Admin = (data) => {
  const { email, emailVerified } = data;
  let html = `
  <div class="admin">
    <p>Hello ${email}</p>
    <p>You forgot to confirm your email ${emailVerified}</p>
  </div>
`;
  root.insertAdjacentHTML("beforeend", html);
};

export default Admin;
