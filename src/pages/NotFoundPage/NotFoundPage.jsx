import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import default_img from '../../images/default_img.jpg';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (        
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h2>Page not found! Redirecting to Home Page in 3 seconds ...</h2>
      <img
        src={default_img}
        alt="RWGFY"
        style={{
        maxWidth: '100%',
        height: 'auto',
        }}
      />
    </div>
    );
};

export default NotFound;
