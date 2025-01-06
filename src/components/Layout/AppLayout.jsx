import { Footer } from "./Footer"
import { Header } from "./Header"


export const AppLayout = ({children}) => {
    return (
        <>
        <Header/>
       <div>{children}</div>
        <Footer/>

        </>
    )
}