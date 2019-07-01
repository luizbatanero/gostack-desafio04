import React from 'react';

import facebook from './assets/facebook.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <img src={facebook} alt="Facebook" />
        </div>
        <nav>
          <span>
            Meu perfil
            <i className="fas fa-user-circle"></i>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
