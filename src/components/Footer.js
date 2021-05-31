import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>Cómo jugar</h2>
            <p>
              Puedes estar aquí como espía o como jugador buscando inspiración. Recuerda que si eres el espía y ven que no estás prestando mucha atención porque estás mirando otras cosas te descrubrirán.<br/>
              Si por el contrario, eres un jugador, no mires mucho esta pantalla o harás perder a tu equipo.
            </p>
          </section>
          
        </div>
        <div>
          
        </div>
      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
