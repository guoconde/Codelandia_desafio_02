import styled from "styled-components";

export default function Footer() {

    return (
        <DivFooter>
            Todos os direitos reservados.
        </DivFooter>
    )
}

const DivFooter = styled.div`
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
    bottom: 0;
`