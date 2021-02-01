import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { PictureCard } from "../../components/pictureCard";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";

const FavouriteContainer = styled.div`
    width: 100%;
    display: flex;
    background-color:#f8dfdf;
    flex-direction:row;
    align-items: flex-start;
`;

const FavWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
`;

const WarningText = styled.h3`
    color: rgb(0, 0, 0);
    font-weight: 500;

`;

export function Artwork(props) {

    const [offeredPics, setPics] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isArtworkEmpty = !offeredPics || (offeredPics && offeredPics.length === 0);

    const fetchArtwork = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:9000/FavPics").catch(
            (err) => {
                console.log("Error: ", err);
            }
        );

        if (response) {
            setPics(response.data);
        }
        setLoading(false);

    };
    useEffect(() => {
        fetchArtwork();
    }, []);

    return <FavouriteContainer>
        <FavWrapper>
            {isArtworkEmpty && !isLoading && (
                <WarningText>No Pictures have been posted yet...Coming Soon! x </WarningText>
            )}
            {isLoading &&
                <WarningText>Art is Loading...</WarningText>}
            {!isArtworkEmpty &&
                !isLoading &&
                offeredPics.map((FavPics, idx) => (
                    <PictureCard key={idx} {...FavPics} />
                ))}
        </FavWrapper>



    </FavouriteContainer>

}