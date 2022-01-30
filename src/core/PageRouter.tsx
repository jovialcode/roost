import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import News from "../pages/News";
import Scribble from "../pages/Scribble";

const Router = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<News/>}/>
                <Route path="/scribble" element={<Scribble/>}/>
            </Routes>
        </Router>
    )
}

export default Router;