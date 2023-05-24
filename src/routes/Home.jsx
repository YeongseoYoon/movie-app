import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import styles from "./Home.module.css";
import Loading from "../components/Loading";

const useCharacterListData = () => {
  const [loading, setLoading] = useState(true);
  const [characterList, setCharacterList] = useState(undefined);

  useEffect(() => {
    const getCharacterList = async () => {
      const json = await (
        await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
        )
      ).json();
      setCharacterList(json.data.results);
      setLoading(false);
    };
    getCharacterList();
  }, []);

  return { loading, characterList };
};

const Home = () => {
  const { loading, characterList } = useCharacterListData();
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.grid_container}>
          {characterList.map((character) => (
            <CharacterList
              key={`${character.name}-${character.id}`}
              id={character.id}
              name={character.name}
              description={character?.description}
              modified={`${new Date(character?.modified).getFullYear()}`}
              thumbnail={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
