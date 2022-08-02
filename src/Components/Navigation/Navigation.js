import React, {useEffect} from 'react';
import './Navigation.css';

const Navigation = function () {
    useEffect (()=> {
        var burger = document.querySelector(".burgersvg");
        var close = document.querySelector(".closesvg");
        var menu = document.querySelector("#mobMenu");
        var navOn = false;
        burger.addEventListener("click", function(e) {
            if (!navOn) {
                e.target.classList.add("zeroDisp");
                setTimeout(function () {
                    burger.style.display = "none"
                    close.style.position = "static";
                    close.style.display = "block"
                    close.classList.add("showClose");
                    menu.style.display = "grid";
                    document.body.style.overflowY = "hidden";
                }, 300)
                navOn = true
            }
        })
        close.addEventListener("click", function(e) {
            if (navOn) {
                e.target.classList.remove("showClose");
                setTimeout(function () {
                    close.style.display = "none"
                    burger.style.display = "block"
                    burger.classList.remove("zeroDisp");
                    menu.style.display = "none";
                    document.body.style.overflowY = "scroll";
                }, 300)
                navOn = false
            }
        })
    })
    return(
        <>
            <nav id="navContainer">
                <div id="navTextContainer">
                    <div className='navText'><a className='navText' href="#">Explore</a></div>
                    <div className='navText'><a className='navText' href="https://discord.gg/h84UGYtfAr">Community</a></div>
                    <div className='navText'><a className='navText' href="https://twitter.com/MobToken?s=20&t=EIg_b3BEjuBHzSHMnmWh9g">Activity</a></div>
                </div>
                <div id='navButtonContainer'>
                    <div id="navButton">Connect Wallet</div>
                </div>
            </nav>
            <nav id="navConMobile">
                <div id="mobControl">
                    <div id="mobcontrol1">
                        <div id="mobilenavButton">Connect Wallet</div>
                    </div>
                    <div id='mobcontrol2'>
                        <img className="burgersvg" src={process.env.PUBLIC_URL + '/img/burger.svg'} />
                        <img className="closesvg" src={process.env.PUBLIC_URL + '/img/close.svg'} />
                    </div>
                </div>
                <div id="mobMenu">
                    <div id="moblistCon">
                        <div className='moblist'><a className='navText' href="#">Explore</a></div>
                        <div className='moblist'><a className='navText' href="https://discord.gg/h84UGYtfAr">Community</a></div>
                        <div className='moblist'><a className='navText' href="https://twitter.com/MobToken?s=20&t=EIg_b3BEjuBHzSHMnmWh9g">Activity</a></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;