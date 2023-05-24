import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CharacterList.module.css";

const CharacterList = ({ id, name, description, modified, thumbnail }) => {
  return (
    <div className={styles.character_item}>
      <div>
        <h2 className={styles.character__name}>
          <Link to={`/character/${id}`}>
            <img src={thumbnail} alt={name} className={styles.character__img} />
          </Link>
        </h2>
        <h3 className={styles.character__name}>{name}</h3>
        <h3 className={styles.character__year}>{modified}</h3>
        <p>
          {description
            ? description.length > 40
              ? `${description.slice(0, 40)}...`
              : description
            : "No description..."}
        </p>
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  modified: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default CharacterList;
