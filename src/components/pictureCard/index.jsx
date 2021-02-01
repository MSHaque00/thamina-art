import React from "react";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";

const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 319px;
    min-height: 250px;
    background-color: #ffffff;
    box-shadow: 0px 0px 16px rgb(0, 0, 0);
    margin: 3em;
    margin-bottom: 1.3em;
    margin-left: 8em;
    outline-style:ridge;
    outline-width: 5px;
    outline-color: #ffb8b8;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        margin-left: 2.5em;
  }
`;

const TopContainer = styled.div`
    width: 100%;
`;

const PictureThumbnail = styled.div`
    width: 100%;
    height: 30em;
    

    img{
        width: 100%;
        height: 100%;
    }
 
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 10px 20px;
    border-top: 3px ridge  #ffb8b8;
 
`;


const Title = styled.h2`
    font-size: 15px;
    margin: 2px;
    font-weight: 500;
    color: #000000;

`;
const Bold = styled.h2`
    font-size: 15px;
    margin: 2px;
    font-weight: 600;
    color: #000000;

`;

const BackgroundFilter = styled.div`
    width: 100% ;
    height: 100% ;
    background-color:rgba(248, 231, 229, 0.952);
    display: flex;
    flex-direction: column;


`;

export function PictureCard(props) {
    const { thumbnailUrl, size, id, title, desc, media } = props;
    return <PictureContainer>
        <TopContainer>
            <PictureThumbnail>
                <img src={thumbnailUrl} alt={title} />
            </PictureThumbnail>
        </TopContainer>
        <BackgroundFilter>
            <ContentContainer>
                <Bold> {size} </Bold>
                <Title> {title} </Title>
                <Title> {desc} </Title>
                <Title> {media} </Title>
            </ContentContainer>
        </BackgroundFilter>
    </PictureContainer>
}