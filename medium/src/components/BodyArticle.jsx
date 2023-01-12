import smallProfile from "../images/small-profile.svg";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/facebook.svg";
import Linkedin from "../images/linkedin.svg";
import Chain from "../images/chain.svg";
import Figure from "../images/figure.svg";
import eMail from "../images/email.svg";
import MainButton from "./MainButton";
import FooterData from "../data/footerData.json";
import FooterCard from "./footerCard";

export default function BodyArticle() {
  return (
    <div className="body-article">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div>
            <img className="small-profile" src={smallProfile} alt="" />
          </div>
          <div className="body-head">
            <div className="author-name">Cassie Kozyrkov</div>
            <div className="d-flex">
              <p>Dec 27, 2022</p>
              <p> . </p>
              <p>9 min read</p>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="mx-3">
            <img src={Twitter} alt="" />
          </div>
          <div className="mx-3">
            <img src={Facebook} alt="" />
          </div>
          <div className="mx-3">
            <img src={Linkedin} alt="" />
          </div>
          <div className="mx-3">
            <img src={Chain} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h2>The best New Year's resolutions you can make</h2>
        <p>Resolutions that actually work, according to a decision scientist</p>
        <p>
          Happy almost-2023! Chances are that you're contemplating making some
          New Year's resolutions, so let's get you set up for success with a few
          resolutions that will unlock the best version of you.
        </p>
        <div>
          <img src={Figure} alt="figure" />
          <p>All copyright belongs to the author.</p>
        </div>
        <h2>#1 - Resolve to stop borrowing resolutions</h2>
        <p>
          Different people are different, so what works for you might not be
          what works for anyone else.
        </p>
        <p>
          Understanding this is the single biggest step you can take in the
          direction of success. That's precisely why I'm not going to do the
          standard guru thing of suggesting you copy my exact wellness plan
          after proving to you that I have a stack of credentials (I do) and I'm
          in shape (I am). My plan fits me, but you need a plan that fits you.
        </p>
        <h2>Quit borrowing other people's resolutions</h2>
        <p>
          Whenever you're tempted to copy your favorite celeb's latest health
          plan, take a moment to think about some potential reasons that person
          is able to stick with it (assuming they are) which you might not know
          about. Do they have a private chef who prevents them from making food
          decisions? Do they secretly loooove cabbage? Is their job less
          stressful than yours? And so on.
        </p>
      </div>
      <div className="fiveButton">
        <MainButton>Resolutions</MainButton>
        <MainButton>Decision Making</MainButton>
        <MainButton>Psychology</MainButton>
        <MainButton>Self Improvement</MainButton>
        <MainButton>Science</MainButton>
      </div>
      <div className="body-footer">
        <div className="body-footer-profile d-flex">
          <div>
            <p>More from Cassie Kozyrkov</p>
            <p>
              Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns,
              art, theatre, decision science. All views are my own.
              twitter.com/quaesita
            </p>
          </div>
          <div className="d-flex flex-column">
            <MainButton>Follow</MainButton>
            <img src={eMail} alt="emailIcon" className="emailBtn" />
          </div>
        </div>
        {FooterData.map((data, index) => (
          <FooterCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
