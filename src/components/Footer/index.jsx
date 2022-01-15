import { Link } from 'react-router-dom';
import { Container, FooterContent } from './Footer.styles';
import logo from '../../assets/header_logo.png';
import { footerData, socials, links } from './footerData';

const Footer = () => {
  return (
    <Container>
      <FooterContent>
        <Link to='/' className='logo'>
          <img src={logo} alt='' />
          <span>TrustRadius</span>
        </Link>
        <div className='list'>
          {footerData.map((item, index) => (
            <div className='footer-item' key={index}>
              <h2 className='label'>{item.label}</h2>
              <ul>
                {item.items.map((subitem, _index) => (
                  <li key={_index}>
                    <Link to={subitem.link}>{subitem.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='divider'></div>
        <div className='bottom'>
          <div className='socials'>
            {socials.map((s, index) => (
              <Link to={s.link} key={index} className='social-item'>
                {s.icon}
              </Link>
            ))}
          </div>
          <div className='links'>
            {links.map((l, index) => (
              <Link to={l.link} key={index} className='link-item'>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='footer'>© Copyright 2013-2021 TrustRadius</div>
      </FooterContent>
    </Container>
  );
};

export default Footer;
