import "../styles/MainArticle.css";
import BodyArticle from "./BodyArticle";
import SideArticle from "./SideArticle";

export default function MainArticle() {
  return (
    <div className="container d-flex">
      <BodyArticle />
      <SideArticle />
    </div>
  );
}
