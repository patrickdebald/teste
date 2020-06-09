import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';

const Header = () => {
    return (
        <nav>
    <div className="nav-wrapper indigo lighten-6">
      <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Teste</LinkWrapper>
      <ul className="right">
        <li><LinkWrapper to='/Compare'>Graphics</LinkWrapper></li>

      </ul>
    </div>
  </nav>
    );
}
export default Header;