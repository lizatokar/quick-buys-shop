import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Catalogue from "./Components/Catalogue/Catalogue";
import Contacts from "./Components/Contacts/Contacts";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main buttons={props.buttons}/>}/>
                <Route path="/catalogue" element={<Catalogue/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route
                    path="/product/:productId"
                    element={<Product reviews={props.data.reviews}/>}
                />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
