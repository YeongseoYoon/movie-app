import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "../components/Character";
import Loading from "../components/Loading";

const useCharacterData = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(undefined);

  useEffect(() => {
    const getCharacter = async () => {
      const json = await (
        await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
        )
      ).json();
      setCharacter(json.data.results[0]);
      setLoading(false);
    };
    getCharacter();
  }, [id]);

  return { loading, character };
};

const Detail = () => {
  const { loading, character } = useCharacterData();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          description={character?.description}
          modified={`${new Date(character?.modified).getFullYear()}`}
          thumbnail={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          comics={character?.comics}
          series={character?.series}
          stories={character?.stories}
          events={character?.events}
          url={character?.urls?.find((url) => url.type === "comiclink")?.url}
        />
      )}
    </>
  );
};

export default Detail;
