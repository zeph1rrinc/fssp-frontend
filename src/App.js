import {Provider, useDispatch, useSelector} from "react-redux";
import {Routes, BrowserRouter, Route, Navigate} from "react-router-dom";
import {authRoutes} from "./routes";
import {store} from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";


function AppRouter() {
    const {isAuth, user} = useSelector(state => state)
    const dispatch = useDispatch()
    if (isAuth) {
        const currentTimestamp = Math.round(new Date().getTime()/1000.0)
        const expTimestamp = Number(user.exp)
        if (expTimestamp < currentTimestamp) {
            localStorage.removeItem('Token')
            dispatch({type: 'LOGOUT', payload: {}})
        }
    }

    return (
        <div className="container">
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component} exact/>
                )}
                {!isAuth && <Route path="/" element={<Login/>} exact/>}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
