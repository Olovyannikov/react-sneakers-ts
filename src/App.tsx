import {
    Routes,
    Route,
} from "react-router-dom";
import {router} from "./router";

const App = (): JSX.Element => {
    return (
        <div className='app'>
            <Routes>
                {router.map((route,index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
        </div>
    )
}

export default App;