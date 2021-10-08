import React from "react";
import '../Assets/styles/Footer.css';
import { ReactComponent as Github } from '../Assets/images/github.svg';
import { ReactComponent as Twitter } from '../Assets/images/twitter.svg';
import { ReactComponent as Linkedin } from '../Assets/images/linkedin.svg';
import { ReactComponent as Mail } from '../Assets/images/mail.svg';

export default function Footer(props) {
  return (<footer className="glass02 p-1r m-sapt" id="contact">
		<div className="contact">
			<a className="contact-item" title="Github" target="_blank" rel="noreferrer" href="https://github.com/utkarsh48">
				<Github />
			</a>
			<a className="contact-item" title="Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/utkarshdhiman48">
				<Twitter />
			</a>
			<a className="contact-item" title="LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/utkarshdhiman48/">
				<Linkedin />
			</a>
			<a className="contact-item" title="email" target="_blank" rel="noreferrer" href="mailto:utkarshdhiman48@gmail.com">
				<Mail />
			</a>
		</div>
    <hr className="max-w-half" />
    <div className="text-center m-halfr"><span>© Utkarsh Dhiman</span></div>
	</footer>);
}