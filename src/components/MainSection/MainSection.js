import React from 'react';
import { Griding } from '../styles/Main.griding.style';
import SectionFour from '../SubSections/SectionFour';
import SectionOne from '../SubSections/SectionOne';
import SectionThree from '../SubSections/SectionThree';
import SectionTwo from '../SubSections/SectionTwo';

const MainSection = () => {
    return (
        <Griding>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThree></SectionThree>
            <SectionFour></SectionFour>
        </Griding>
    );
};

export default MainSection;