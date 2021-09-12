import logo from '../images/logo.svg';
import logoWhite  from '../images/logo-white.svg';

const Logo = ({style, color }) => {
  if(color === 'white') {
    return (<img loading="eager" alt="" src={logoWhite} style={style} />);
  }
  return (<img loading="eager" alt="" style={style} src={logo}  />)
};

export default Logo;