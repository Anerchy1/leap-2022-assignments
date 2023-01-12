import mediumProfile from "../images/med-profile.svg";
import eMail from "../images/email.svg";
import MainButton from "./MainButton";
import data from "../data/data.json";
import Card from "./Card";

export default function SideArticle() {
  return (
    <div className="side-bar d-flex justify-content-between flex-column">
      <div>
        <div className="side-profile d-flex flex-column">
          <div>
            <img src={mediumProfile} alt="profile" />
          </div>
          <p className="author-name">Cassie Kozyrkov</p>
          <p>115K Followers</p>
          <p>
            Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
            theatre, decision science. All views are my own.
            twitter.com/quaesita
          </p>
          <div className="hoyorYgaanYum">
            <MainButton>Follow</MainButton>

            {/* <Email /> */}
            <img src={eMail} alt="emailIcon" className="emailBtn" />
          </div>
        </div>
        <p className="card-title">More from Medium</p>
        <div>
          {data.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="side-bar-footer">
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">Writers</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">About</a>
        <a href="#">Text to speech</a>
      </div>
    </div>
  );
}
