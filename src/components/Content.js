import React, { useState } from "react";
import "./Content.css";

const Content = () => {
  const [cursor, setCursor] = useState("pointer");
  const [generating, setGenerating] = useState(false);

  const [h_fb1, setW_fb1] = useState(50);
  const [h_fb4, setW_fb4] = useState(50);

  const [w_fb2, setW_fb2] = useState(50);
  const [w_b4, setW_b4] = useState(50);

  const [w_b1, setW_b1] = useState(50);
  const [w_b2, setW_b2] = useState(50);

  const [h_fb3, setH_fb3] = useState(50);
  const [h_b3, setH_b3] = useState(50);

  const [w_b5, setW_b5] = useState(50);
  const [w_fb5, setW_fb5] = useState(50);

  const [w_b6, setW_b6] = useState(50);
  const [w_b7, setW_b7] = useState(50);

  const [h_fb6, setH_fb6] = useState(33);
  const [h_b8, setH_b8] = useState(33);
  const [h_fb7, setH_fb7] = useState(34);

  const [w_b9, setW_b9] = useState(50);
  const [w_b10, setW_b10] = useState(50);

  const [img1, setImg1] = useState(1);
  const [img2, setImg2] = useState(2);
  const [img3, setImg3] = useState(3);
  const [img4, setImg4] = useState(4);
  const [img5, setImg5] = useState(5);
  const [img6, setImg6] = useState(6);
  const [img7, setImg7] = useState(7);
  const [img8, setImg8] = useState(8);
  const [img9, setImg9] = useState(9);
  const [img10, setImg10] = useState(10);

  const regenerate = () => {
    setGenerating(true);
    setCursor("progress");
    setTimeout(() => {
      setGenerating(false);
      setCursor("pointer");
    }, 2000);

    let tmp1, tmp2;

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setW_fb1(tmp1);
    setW_fb4(tmp2);

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setW_fb2(tmp1);
    setW_b4(tmp2);

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setW_b1(tmp1);
    setW_b2(tmp2);

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setH_fb3(tmp1);
    setH_b3(tmp2);

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setW_b5(tmp1);
    setW_fb5(tmp2);

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setW_b6(tmp1);
    setW_b7(tmp2);

    tmp1 = Math.round(Math.random() * 40 + 5);
    tmp2 = Math.round(Math.random() * 40 + 10);
    let tmp3 = 100 - tmp1 - tmp2;
    setH_fb6(tmp3);
    setH_b8(tmp2);
    setH_fb7(tmp1);

    tmp1 = Math.round(Math.random() * 40 + 30);
    tmp2 = 100 - tmp1;
    setW_b9(tmp1);
    setW_b10(tmp2);

    let a = [];
    for (let i = 0; i < 10; i++) {
      a.push(i + 1);
    }
    let sa = a.sort((a, b) => 0.5 - Math.random()); //sa = shuffled array
    setImg1(sa[0]);
    setImg2(sa[1]);
    setImg3(sa[2]);
    setImg4(sa[3]);
    setImg5(sa[4]);
    setImg6(sa[5]);
    setImg7(sa[6]);
    setImg8(sa[7]);
    setImg9(sa[8]);
    setImg10(sa[9]);
  };

  //fb = flexbox; b = box;
  return (
    <main className="content" onClick={regenerate} style={{ cursor: cursor }}>
      {generating ? <div className="waitingScreen">Generating...</div> : null}
      <div className="fb fb1" style={{ height: `${h_fb1}vh` }}>
        <div className="fb fb2" style={{ width: `${w_fb2}vw` }}>
          <div className="fb fb3" style={{ height: `${h_fb3}%` }}>
            <div className="b b1" style={{ width: `${w_b1}%` }}>
              <img src={require(`./img/img${img1}.jpg`)} alt="img" />
            </div>
            <div className="b b2" style={{ width: `${w_b2}%` }}>
              <img src={require(`./img/img${img2}.jpg`)} alt="img" />
            </div>
          </div>
          <div className="b b3" style={{ height: `${h_b3}%` }}>
            <img src={require(`./img/img${img3}.jpg`)} alt="img" />
          </div>
        </div>
        <div className="b b4" style={{ width: `${w_b4}vw` }}>
          <img src={require(`./img/img${img4}.jpg`)} alt="img" />
        </div>
      </div>
      <div className="fb fb4" style={{ height: `${h_fb4}vh` }}>
        <div className="b b5" style={{ width: `${w_b5}vw` }}>
          <img src={require(`./img/img${img5}.jpg`)} alt="img" />
        </div>
        <div className="fb fb5" style={{ width: `${w_fb5}vw` }}>
          <div className="fb fb6" style={{ height: `${h_fb6}%` }}>
            <div className="b b6" style={{ width: `${w_b6}%` }}>
              <img src={require(`./img/img${img6}.jpg`)} alt="img" />
            </div>
            <div className="b b7" style={{ width: `${w_b7}%` }}>
              <img src={require(`./img/img${img7}.jpg`)} alt="img" />
            </div>
          </div>
          <div className="b b8" style={{ height: `${h_b8}%` }}>
            <img src={require(`./img/img${img8}.jpg`)} alt="img" />
          </div>
          <div className="fb fb7" style={{ height: `${h_fb7}%` }}>
            <div className="b b9" style={{ width: `${w_b9}%` }}>
              <img src={require(`./img/img${img9}.jpg`)} alt="img" />
            </div>
            <div className="b10" style={{ width: `${w_b10}%` }}>
              <img src={require(`./img/img${img10}.jpg`)} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
