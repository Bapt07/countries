import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1 className='title'>A propos</h1>
            <br />
            <p className='texte'>Bienvenue sur notre belle planète terre !! Et quoi de mieux que c'est différents pays avec leur capitales ainsi que leur nombre d'habitants pour en apprendre beaucoup plus sur nous ? Amusez-vous bien !</p>
        </div>
    );
};

export default About;