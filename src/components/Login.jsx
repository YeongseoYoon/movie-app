import styles from "./Form.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Login = () => {
  return (
    <div>
      <h2 className={styles.title}>Login</h2>
      <form method="post" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
        <div className={styles.loginBtn}>
          <a href="#">Find ID</a>
          <span>|</span>
          <a href="#">Find Password</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
