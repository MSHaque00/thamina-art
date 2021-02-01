import React from "react";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar"
import { deviceSize } from "../../components/responsive";
import { Marginer } from "../../components/marginer";
import blackNwhite from "../../images/blackNwhite.jpg";
import { Favourite } from "./favourites";
import { Footer } from "../../components/footer";



const ContentContainer = styled.div`
    width: 100;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    
    
`;

const BackgroundFilter = styled.div`
    width: 100% ;
    height: 100% ;
    background-color: rgba(239, 191, 189, 0.61);
    display: flex;
    flex-direction: column;

`;
const MidSectionContainer = styled.div`
    width: 100%;
    height: 753px;
    background-image: url(${blackNwhite});
    background-position: 0px -120px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        background-position: -700px 0px;
        height: 100%;

  }
    

`;



export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <Navbar />
            </TopSection>
            <Marginer direction="vertical" margin={0.9} />
            <MidSectionContainer>
                <BackgroundFilter>
                    <InnerPageContainer>

                        <ContentContainer>
                            <Favourite />
                        </ContentContainer>
                    </InnerPageContainer>
                </BackgroundFilter>
            </MidSectionContainer>

            <Marginer direction="vertical" margin={2} />
            <Footer />
        </PageContainer>
    );
}