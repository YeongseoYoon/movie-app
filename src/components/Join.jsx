import styles from "./Form.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Join = () => {
  return (
    <div>
      <h2 className={styles.title}>Join</h2>
      <form method="post" onSubmit={handleSubmit}>
        <input type="email" name="userEmail" placeholder="Email" />
        <input type="password" name="userPassword" placeholder="Password" />
        <input
          type="password"
          name="useConfirmPassword"
          placeholder="Confirm Password"
        />
        <input type="submit" value="Join" />
      </form>
    </div>
  );
};

export default Join;
