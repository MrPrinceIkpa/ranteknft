import React from 'react';
import './Nft.css';

const Nft = function (props) {
    var {url} = props;
    return (
        <div className="nftCon">
            <img src={url} className="nftImg" alt="NFT"/>
        </div>
    )
}

export default Nft;