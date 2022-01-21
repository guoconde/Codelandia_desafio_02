import { useState } from 'react'
import styled from 'styled-components'
import Jordans from './Jordans'

import Jordan_1 from './Jordans/images/jordan_1.png'
import Jordan_2 from './Jordans/images/jordan_2.png'
import Jordan_3 from './Jordans/images/jordan_3.png'
import Jordan_4 from './Jordans/images/jordan_4.png'
import Jordan_5 from './Jordans/images/jordan_5.png'
import Jordan_6 from './Jordans/images/jordan_6.png'
import Jordan_7 from './Jordans/images/jordan_7.png'
import Jordan_8 from './Jordans/images/jordan_8.png'

export default function Main() {
    
    const [buy, setBuy] = useState([])

    const items = [
        Jordan_1, Jordan_2, Jordan_3, Jordan_4, Jordan_5, Jordan_6, Jordan_7, Jordan_8
    ]

    function handleBuy(i) {

        if (buy.includes(i)) {
            removeItem(i)
        } else {
            setBuy([...buy, i])
        }
    }

    function removeItem(i) {
        const arr = buy.filter(b => b !== i)
            setBuy([...arr])
    }

    function isConfirmed() {
        alert('Compra realizada com sucesso!')

        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return (
        <DivMain>
            <h1>Destaques</h1>
            <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
            <DivJordan onClick={e => handleBuy(e.target.id)}>
                {items.map((item, i) =>
                    <Jordans item={item} i={i} key={i} />
                )}
            </DivJordan>
            {buy.length === 0 ? '' : <button onClick={isConfirmed}>Comprar</button>}
        </DivMain>
    )
}

const DivMain = styled.div`
    width: 100%;
    max-width: 1300px;

    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 20px;
        font-size: 32px;
        font-weight: 600;
        color: #181818;
    }

    p {
        margin-bottom: 60px;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        color: #474747;
        padding: 0 20px;
    }

    button {
        width: 300px;
        height: 60px;

        border-radius: 30px;
        background-color: #181818;

        font-family: Montserrat;
        font-size: 32px;
        font-weight: 600;

        color: #f9f9f9;
        margin-top: 60px;

        cursor: pointer;
        
        :active {
            background-color: black;
            color: gray;
        }
    }

    @media (max-width: 450px) {
        h1 {
            font-size: 28px;
        }

        p {
            font-size: 16px;
        }
    }
`

const DivJordan = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 25px;
`
