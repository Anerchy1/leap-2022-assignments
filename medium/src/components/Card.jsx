export default function Card(datas) {
  return (
    <div className="d-flex mb-4 justify-content-between row">
      <div className="col-8">
        <div className="d-flex card-topNames">
          <img
            className="card-profile"
            width={20}
            height={20}
            src={datas.data.profile}
            alt=""
          />
          <p className="card-top">{datas.data.publisher}</p>
          <p className="card-p">in</p>
          <p className="card-top">{datas.data.section}</p>
        </div>
        <p className="card-article">{datas.data.article}</p>
      </div>
      <div className="col-4">
        <img width={56} height={56} src={datas.data.image} alt="" />
      </div>
    </div>
  );
}
