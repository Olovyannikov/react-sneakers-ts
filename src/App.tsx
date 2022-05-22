import {
    Routes,
    Route,
} from "react-router-dom";
import {router} from "./router";
import cn from "classnames";
import {useContext} from "react";
import {DrawerCtx} from "./context";

const App = (): JSX.Element => {
    const {isOpen} = useContext(DrawerCtx);

    return (
        <div className={cn('app', isOpen && 'drawer')}>
            <Routes>
                {router.map((route,index) => (
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
        </div>
    )
}

export default App;