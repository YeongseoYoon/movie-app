import PropTypes from "prop-types";
import styles from "./Character.module.css";

const Character = ({
  name,
  description,
  modified,
  thumbnail,
  comics,
  series,
  stories,
  events,
  url,
}) => {
  return (
    <>
      <img src={thumbnail} alt={name} className={styles.character__bgImg} />

      <div className={styles.character__detail}>
        <div className={styles.character__bgContainer} id={styles.container1}>
          <h2 className={styles.character__title}>{name}</h2>
          <p>
            {description
              ? description.length > 150
                ? `${description.slice(0, 150)}...`
                : description
              : "No description..."}
          </p>
          <span>📅 {modified}</span>
          {url && (
            <button
              className={styles.character__infoBtn}
              onClick={() => {
                window.open(url);
              }}
            >
              For More Information →
            </button>
          )}
        </div>
        <div className={styles.character__bgContainer} id={styles.container2}>
          <img src={thumbnail} alt={name} className={styles.character__img} />
        </div>
      </div>
    </>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  modified: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
};

export default Character;
