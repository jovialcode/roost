import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import News from "../pages/News";
import Scribble from "../pages/Scribble";
import DefaultLayout from "../components/layouts/DefaultLayout";

const PageRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/"
                       element={
                        <DefaultLayout>
                            <News/>
                        </DefaultLayout>
                       }
                />
                <Route path="/news"
                       element={
                            <DefaultLayout>
                                <News/>
                            </DefaultLayout>
                       }
                />
                <Route path="/scribbles"
                       element={
                           <DefaultLayout>
                               <Scribble/>
                           </DefaultLayout>
                       }
                />
            </Routes>
        </Router>
    );
}

export default PageRouter;