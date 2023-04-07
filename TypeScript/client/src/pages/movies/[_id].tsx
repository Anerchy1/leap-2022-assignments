import { IMovie } from "@/interfaces/movie";
import { GetStaticPropsContext } from "next";
import { FC, useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:7070/api/movies/ids");
  const data = await response.json();
  const paths = data.map((_id: string) => ({
    params: {
      _id,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const response = await fetch(
    `http://localhost:7070/api/movies/${params?._id}`
  );
  const data = await response.json();
  return { props: { data } };
};

interface Props {
  data: IMovie;
}

const Index: FC<Props> = ({ data }) => {
  const [movie, setMovie] = useState<IMovie | undefined>(data);

  if (!movie) return <h1>Movie not found</h1>;

  return <h1>{movie.title}</h1>;
};

export default Index;