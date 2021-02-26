import React from 'react';
import DefaultBanner from '../Atoms/DefaultBanner';
import GridCharacters from '../Organisms/GridCharacters'

const Characters = () => {
    return (
        <>
            <DefaultBanner title="Characters" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti libero magnam voluptates nostrum molestiae nemo accusantium officia illo laborum ratione pariatur, perferendis adipisci quidem in nihil itaque neque mollitia?"/>
            <GridCharacters />
        </>
    );
}

export default Characters;