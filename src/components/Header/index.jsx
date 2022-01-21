import { useEffect, useState } from "react";
import styled from "styled-components";

import ImageBanner from '../../assets/images/image_banner.png'
import ImageBannerMini from '../../assets/images/image_banner_mini.png'

export default function Header() {
    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    return (
        <>
            <DivHeader>
                <HeaderGift>Ganhe R$ 10,00 de desconto no frete</HeaderGift>
                <HeaderName>JordanShoes</HeaderName>
                <HeaderBanner>
                    {
                        size.width > 450 ? 
                        <img src={ImageBanner} alt='Imagem_do_banner' /> :
                        <img src={ImageBannerMini} alt='Imagem_do_banner_mini' /> 
                    }
                    <div>
                        <h1>A melhor loja de Jordan</h1>
                        <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                    </div>
                </HeaderBanner>
            </DivHeader>
        </>
    )
}

const DivHeader = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`

const HeaderGift = styled.div`
    width: 100%;
    height: 60px;

    background-color: #181818;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    color: #f9f9f9;

    padding-top: 20px;

    position: fixed;
    top: 0;
    z-index: 2;
`

const HeaderName = styled.div`
    width: 100%;
    height: 60px;
    
    background-color: #f9f9f9;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

    font-size: 24px;
    font-weight: 600;
    text-align: center;
    
    padding-top: 20px;

    position: fixed;
    top: 60px;
    z-index: 2;
`

const HeaderBanner = styled.div`
    width: 100%;
    height: 378px;

    background-color: #181818;
    
    margin-top: 120px;

    position: relative;
    overflow: hidden;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 378px;
        opacity: 0.6;
    }

    div {
        width: 460px;

        font-size: 18px;
        font-weight: 600;
        line-height: 35px;
        color: #f9f9f9;
        
        position: absolute;
        top: 128px;
        left: 100px;
        
        h1 {
            margin-bottom: 20px;

            font-size: 32px;
        }
        
        @media (max-width: 450px) {
            width: 359px;
            
            left: 20px;
            
            font-size: 16px;
            font-weight: 600;
            line-height: 29px;

            h1 {
                font-size: 28px;
            }
        }
    }

    
`