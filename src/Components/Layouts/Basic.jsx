import React from 'react';
import { useHistory } from "react-router-dom";
import "../../Assets/styles/Basic.css";
import Background from '../common/Background';
import Footer from '../Footer';


export default function Basic(props) {
  const {heading, children} = props;
  const history = useHistory();

  const goBack = ()=>{
    history.push("/");
  }

  return (<>
    <header className="basic-header p-1r">
      <div className="back-btn font-bold" onClick={goBack}>
      〈
      </div>
      <span className="basic-heading">{heading}</span>
    </header>
    <main className="p-1r main">
      {children}
    </main>
    <Footer />
    <Background text={heading} />
  </>);
}