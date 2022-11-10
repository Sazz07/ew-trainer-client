import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import SecondFeature from '../Features/SecondFeature';
import Services from '../Services/Services/Services';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SecondFeature></SecondFeature>
            <Features></Features>
        </div>
    );
};

export default Home;