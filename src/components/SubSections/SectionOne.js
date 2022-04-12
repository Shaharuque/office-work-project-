import React from 'react';
import { CustomDiv, SectionOneGrid } from '../styles/Main.griding.style';
import { BeakerIcon } from '@heroicons/react/solid'



const SectionOne = () => {
    return (
        <>
            <SectionOneGrid>
                <CustomDiv>
                    <p>Congratulations 🎉 John You have won gold medal</p>
                </CustomDiv>
                <CustomDiv>
                    <p>Statistics</p>
                    <p>Updated 1 month ago</p>
                    <p>Statistics</p>
                    <p>Statistics</p>
                    <p>Statistics</p>
                </CustomDiv>
            </SectionOneGrid>
        </>
    );
};

export default SectionOne;