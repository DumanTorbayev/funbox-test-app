import React from 'react';

const BuyButton = ({setSelected}) => {
    return (
        <>
            Чего сидишь? Порадуй котэ, <button onClick={() => setSelected(true)}>купи.</button>
        </>
    );
};

export default BuyButton;
