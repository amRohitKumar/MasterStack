import { Fragment, useRef } from "react";
import Header from "./components/Header";
import CountDown from "./components/countdown";
import Rules from "./components/rules";
import About from "./components/about";
import MyTimeLine from "./components/timeline";
import Prizes from "./components/prizes";
import { Footer } from "../../components";

const LandingPage = () => {
  const about = useRef(null);
  const rules = useRef(null);
  const timeline = useRef(null);
  const prizes = useRef(null);
  return (
    <Fragment>
      <Header about={about} rules={rules} timeline={timeline} prizes={prizes} />
      <CountDown />
      <About ref={about} />
      <Rules ref={rules} />
      <MyTimeLine ref={timeline} />
      <Prizes ref={prizes} />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
