import MainButton from "./MainButton";

export default function FooterCard(datas) {
  return (
    <div className="footer-card">
      <p className="footer-date">{datas.data.date}</p>
      <div className="d-flex justify-content-between">
        <div>
          <h2 className="footer-title">{datas.data.title}</h2>
          <p className="footer-article">{datas.data.article}</p>
        </div>
        <div>
          <img
            className="footer-image"
            width={112}
            height={112}
            src={datas.data.image}
            alt=""
          />
        </div>
      </div>
      <div className="fiveButton">
        <MainButton>{datas.data.button}</MainButton>
      </div>
    </div>
  );
}
