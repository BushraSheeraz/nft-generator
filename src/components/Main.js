import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
import Middle from "./Middle";
import NavBar from "./NavBar";
import Payment from "./Payment";


function Main() {
    return (
        <>
            <NavBar />
            <Banner />
            <Payment />
            <Middle />
            <Faq />
            <Footer />
        </>
    )
}

export default Main;