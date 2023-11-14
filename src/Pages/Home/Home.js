
import Navigation from '../../Components/Navigation/Navigation';
import Hero from '../../Components/Hero/Hero';


import homeBg from '../../assets/images/home-bg.webp';

const hmStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${homeBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw auto',
    backgroundPosition: 'center left'
}

const Home = () => {
   

    return (
        <main>
            <Navigation />
            <div className="home_page page_fixed" style={hmStyles}>
                <Hero />
            </div>
        </main>
    );
};

export default Home;