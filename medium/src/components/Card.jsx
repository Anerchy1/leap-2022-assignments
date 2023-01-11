export default function Card(datas) {
  return (
    <div className="d-flex mb-4 justify-content-between">
      <div>
        <div className="d-flex">
          <img width={20} height={20} src={datas.data.profile} alt="" />
          <p>{datas.data.publisher}</p>
          <p>{datas.data.section}</p>
        </div>
        <p>{datas.data.article}</p>
      </div>
      <div>
        <img width={56} height={56} src={datas.data.image} alt="" />
      </div>
    </div>
  );
}
