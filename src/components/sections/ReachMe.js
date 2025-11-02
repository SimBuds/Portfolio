import { Link } from 'react-router-dom';
import '../../assets/styles/ReachMe.css';

const ReachMe = () => {
    return (
        <div className="reach-me">
            <h1>Would you like to work with me?</h1>
            <p>If you would love to learn more information or would like to request to work with me feel free to hit the button below to get in touch.</p>
            <Link to="/contactme" className="reach-me-button">Let's chat</Link>
        </div>
    );
}

export default ReachMe;