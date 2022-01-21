import { useState } from "react"
import styled from "styled-components"

export default function Jordans({ item, i}) {

    const [select, setSelect] = useState(false)
    
    function isSelected() {
        !select ? setSelect(true) : setSelect(false)
    }
    
    return (
        <DivJordan onClick={() => isSelected()} id={i} selected={select}>
            <img src={item} id={i} alt={`${i}.img`} />
        </DivJordan>
    )
}

const DivJordan = styled.div`
    width: 300px;
    height: 300px;

    background-color: #EBE9EA;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

    border: 5px solid ${props => props.selected ? '#181818' : 'none'};
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;

    @media (max-width: 450px) {
        width: 374px;
    }
`