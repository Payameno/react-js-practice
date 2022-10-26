import PropTypes from 'prop-types';
import Button from './Button';

const secondTitle = 'Second Title';
//below is an example of dynamic styling
// const secondHeaderStyle = {
//   color: 'Blue',
//   backgroundColor: 'purple'
// };
//line below goes inside the return
// <h1 style={secondHeaderStyle}>{secondTitle}</h1>

const Header = ({ title }) => {

  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
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
