import movieDetailDatas from "../Data/movieDetailData.json";

function MovieDetailData() {
  return (
    <>
      <div className="detail-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetailDatas.poster_path}`}
          alt={`${movieDetailDatas.title}`}
        />
      </div>
      <div className="detail-title">{movieDetailDatas.title}</div>
      <div className="detail-vote_average">
        평점 : {movieDetailDatas.vote_average}
      </div>
    </>
  );
}

export default MovieDetailData;
