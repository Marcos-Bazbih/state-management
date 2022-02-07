import { BrowserRouter, Routes, Route } from "react-router-dom";
import Massage from './components/pages/Massage';
import Home from './components/pages/Home';
import Header from './components/parts/Header';
import Footer from './components/parts/Footer';
import Sidebar from './components/parts/Sidebar';


const AppRouter = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/massage" element={<Massage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
export default AppRouter;