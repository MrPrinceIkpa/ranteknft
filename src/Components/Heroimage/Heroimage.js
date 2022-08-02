import React, {useEffect} from 'react';
import './Heroimage.css';
import Nft from '../Nft/Nft';

const Heroimage = function() {
    useEffect (() => {
        var nft1 = document.querySelector("#pic1").children[0].children[0];
        var nft2 = document.querySelector("#pic2").children[0].children[0];
        var nft3 = document.querySelector("#pic3").children[0].children[0];

        setTimeout(function() {
            nft1.classList.toggle("position2")
        }, 700)
        setTimeout(function() {
            nft2.classList.toggle("position22")
        }, 800)
        setTimeout(function() {
            nft3.classList.toggle("position222")
        }, 1000)
    })
    return(
        <div id="gallery">
            <div id="pic1">
                <Nft id="nft1" url={process.env.PUBLIC_URL + "/img/nft.jpg"} />
            </div>
            <div id="pic2">
                <Nft url={process.env.PUBLIC_URL + "/img/nft2.png"} />
            </div>
            <div id="pic3">
                <Nft url={process.env.PUBLIC_URL + "/img/nft4.png"} />
            </div>
        </div>
    )
}

export default Heroimage