import { useState } from "react"
import styled from "styled-components"

export default function Jordans({ item, i }) {
    
    const [select, setSelect] = useState(false)

    function isSelected() {
        !select ? setSelect(true) : setSelect(false)
    }

    console.log(select)

    return (
        <DivJordan onClick={() => isSelected()} selected={select}>
            <img src={item} alt={`${i}.img`} />
        </DivJordan>
    )
}

const DivJordan = styled.div `
    width: 300px;
    height: 300px;

    background-color: #EBE9EA;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

    border: 5px solid ${props => props.selected ? '#00FF00' : 'none' } ;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
`