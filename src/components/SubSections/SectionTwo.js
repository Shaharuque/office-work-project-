import React from 'react';
import { CustomDiv, EarningDiv, InnerDiv, RevenueReportDiv, SectionTwoGrid } from '../styles/Main.griding.style';

const SectionTwo = () => {
    return (
        <>
            <SectionTwoGrid>
                <div>
                    <InnerDiv>
                        <CustomDiv>
                            <p>Demo</p>
                            <p>Demo</p>
                        </CustomDiv>
                        <CustomDiv>
                            <p>Demo</p>
                        </CustomDiv>
                    </InnerDiv>
                    <EarningDiv>
                        <CustomDiv>
                           <p>Earnings-Demo</p> 
                           <p>Earnings-Demo</p> 
                           <p>Earnings-Demo</p> 
                           <p>Earnings-Demo</p>
                           <p>Earnings-Demo</p> 
                           <p>Earnings-Demo</p> 
                        </CustomDiv>
                    </EarningDiv>
                </div>

                <div>
                    <CustomDiv>
                       <RevenueReportDiv>
                            <div>
                                <p>Demo</p>
                            </div>
                            <div>
                                <h2>$25,852</h2>
                                <p>Budget: 56,800</p>
                            </div>
                       </RevenueReportDiv>
                    </CustomDiv>
                </div>
                
            </SectionTwoGrid>
        </>
    );
};

export default SectionTwo;