import Header from "../Header"

import { ResetStyle } from "../../assets/css/Reset"
import { GlobalStyle } from "../../assets/css"

export default function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />

            <Header />
            <h1>Estoy aqui</h1>
        </>
    )
}