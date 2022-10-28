import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from './Button';

const secondTitle = 'Second Title';
//below is an example of dynamic styling
// const secondHeaderStyle = {
//   color: 'Blue',
//   backgroundColor: 'purple'
// };
//line below goes inside the return
// <h1 style={secondHeaderStyle}>{secondTitle}</h1>

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

return (
    <header className='header'>
      <h1 style={{color: 'red'}}>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
    </header>
  )
}

//to define default values within the component
// Header.defaultProps = {
//   title: 'Task Tracker',
// }

// To specify types for props, error is given if does not match
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
