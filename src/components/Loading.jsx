import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
