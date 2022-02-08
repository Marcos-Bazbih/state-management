import { useContext } from "react";
import { MassageContext } from "../../../Context/massage-context";
import Massage from "../Massage";
import { ShowAction } from "../../../Actions/massage-actions";
import "./Home.css";

const Home = () => {
  const { state, dispatch } = useContext(MassageContext);

  const SendDispatch= () => {
    dispatch(ShowAction({msgText: "some text..."}))
  }

  return (
    <div className="home main">
      <h1>Home Page</h1>
      <Massage />
      <button className="dispatchBtn" onClick={SendDispatch}>CLICK</button>
    </div>
  );
};

export default Home;
