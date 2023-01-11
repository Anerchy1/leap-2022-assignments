import smallProfile from "../images/small-profile.svg";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/facebook.svg";
import Linkedin from "../images/linkedin.svg";
import Chain from "../images/chain.svg";
import Figure from "../images/figure.svg";
import mediumProfile from "../images/med-profile.svg";
import eMail from "../images/email.svg";
import MainButton from "./MainButton";
import Email from "../components/Email";
import data from "../data/data.json";
import Card from "./Card";

export default function MainArticle() {
  return (
    <div className="container d-flex">
      <div className="main-article">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div>
              <img src={smallProfile} alt="" />
            </div>
            <div className="">
              <div>Cassie Kozyrkov</div>
              <div className="d-flex">
                <div>Dec 27, 2022</div>
                <div> . </div>
                <div>9 min read</div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="mx-2">
              <img src={Twitter} alt="" />
            </div>
            <div className="mx-2">
              <img src={Facebook} alt="" />
            </div>
            <div className="mx-2">
              <img src={Linkedin} alt="" />
            </div>
            <div className="mx-2">
              <img src={Chain} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2>The best New Year's resolutions you can make</h2>
          <p>
            Resolutions that actually work, according to a decision scientist
          </p>
          <p>
            Happy almost-2023! Chances are that you're contemplating making some
            New Year's resolutions, so let's get you set up for success with a
            few resolutions that will unlock the best version of you.
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
            after proving to you that I have a stack of credentials (I do) and
            I'm in shape (I am). My plan fits me, but you need a plan that fits
            you.
          </p>
          <h2>Quit borrowing other people's resolutions</h2>
          <p>
            Whenever you're tempted to copy your favorite celeb's latest health
            plan, take a moment to think about some potential reasons that
            person is able to stick with it (assuming they are) which you might
            not know about. Do they have a private chef who prevents them from
            making food decisions? Do they secretly loooove cabbage? Is their
            job less stressful than yours? And so on.
          </p>
        </div>
      </div>
      <div className="side-bar">
        <div className="profile d-flex flex-column">
          <div>
            <img src={mediumProfile} alt="profile" />
          </div>
          <p>Cassie Kozyrkov</p>
          <p>115K Followers</p>
          <p>
            Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
            theatre, decision science. All views are my own.
            twitter.com/quaesita
          </p>
          <div>
            <MainButton>Follow</MainButton>
            <MainButton>
              <Email />
              {/* <img src={eMail} alt="emailIcon" className="p-0 m-0" /> */}
            </MainButton>
          </div>
        </div>
        <div>
          <p>More from Medium</p>
          {data.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
