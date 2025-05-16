import homepage_img from '../../images/homepage.jpg';

const Home = () => {
    return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
                >
                <img
                    src={homepage_img}
                    alt="Slava_Ukraini"
                    style={{
                    maxWidth: '100%',
                    height: 'auto',
                    }}
                />
            </div>
)};

export default Home;
