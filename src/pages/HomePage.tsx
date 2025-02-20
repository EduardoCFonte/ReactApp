import FootStep from '../components/FootStep';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';

const HomePage = () => {
    return (
        <>
        <Hero />
        <HomeCards />
        <JobListings isHome = {true} />
        <FootStep />
        </>
    );
}
export default HomePage;