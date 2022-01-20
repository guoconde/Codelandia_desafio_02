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
    const items = [
        Jordan_1, Jordan_2, Jordan_3, Jordan_4, Jordan_5, Jordan_6, Jordan_7, Jordan_8
    ]

    return (
        <DivMain>
            <h1>Destaques</h1>
            <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
            <DivJordan>
                {items.map((item, i) =>
                    <Jordans item={item} i={i} key={i} />
                )}
            </DivJordan>
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
    }
`

const DivJordan = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 25px;
`
