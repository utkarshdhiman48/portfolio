import React from 'react';


export default function Extras(props) {
  const generateSection = (img, heading, content, links) => {
    return (<section className="image-content-rgrid glass02 m-sap b-1r">
      {img && <img alt={heading} src={img} className="block pointer b-halfr" onClick={(e)=>props.toggleModal(e)} />}
      <div>
        <h2>{heading}</h2>
        <p>{content}</p>
        {links && links.map(link => <a href={link.to} target="_blank" rel="noreferrer" className="link01" key={link.to}>{link.label}</a>)}
      </div>
    </section>);
  }
  return (<div className="stuff">
    {generateSection(require("../../Assets/images/stain.jpg").default, "Stain theme for VS Code", "I tried various themes over the marketplace some too colorful, others too dark or with a little contrast. I created my theme which is neither too dull nor too bright.", [{ to: "https://github.com/utkarsh48/stain-theme-vscode", label: "Github" }])}
    {generateSection(require("../../Assets/images/legacy.jpg").default, "Legacy Portfolio", "I no longer maintain that version of portfolio. It had some cool design, features and some redundant content.", [{to: "https://bit.ly/ut-legacy-portfolio", label: "Check it out!"}])}
  </div>);
}