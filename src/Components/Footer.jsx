import React from "react";
import '../Assets/styles/Footer.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Github } from '../Assets/images/github.svg';
import { ReactComponent as Twitter } from '../Assets/images/twitter.svg';
import { ReactComponent as Linkedin } from '../Assets/images/linkedin.svg';
import { ReactComponent as Mail } from '../Assets/images/mail.svg';

export default function Footer(props) {
  return (<footer className="glass02 p-1r m-sapt" id="contact">
		<div className="contact">
			<Link className="contact-item" title="Github" to="https://github.com/utkarsh48">
				<Github />
			</Link>
			<Link className="contact-item" title="Twitter" to="https://twitter.com/utkarshdhiman48">
				<Twitter />
			</Link>
			<Link className="contact-item" title="LinkedIn" to="https://www.linkedin.com/in/utkarsh-dhiman-b626b5149/">
				<Linkedin />
			</Link>
			<Link className="contact-item" title="email" to="mailto:utkarshdhiman48@gmail.com">
				<Mail />
			</Link>
		</div>
    <hr className="max-w-half" />
    <div className="text-center m-halfr"><span>© Utkarsh Dhiman</span></div>
	</footer>);
}