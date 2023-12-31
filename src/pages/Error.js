import img from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className = 'full-page'>
        <div>
            <img src = { img } alt = 'Not Found' />
            <h3>Ohh! Page not found!</h3>
            <p>We can't seem to find the page you're looking for</p>
            <Link to = '/'>Back Home</Link>
        </div>
    </Wrapper>
  )
}

export default Error;