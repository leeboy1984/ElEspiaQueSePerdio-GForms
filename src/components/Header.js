import React from 'react';
import config from '../../config';
import { Link } from 'gatsby';

export default function Header({ onAction = () => {} }) {
  return (
    <header id="header">
      <h1>
        <Link to="/">
          <strong>{config.heading}</strong> - {config.subHeading}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="#footer"
              onClick={e => onAction(e, 'about')}
              className="icon fa-info-circle"
            >
              Cómo jugar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
