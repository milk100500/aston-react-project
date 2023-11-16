import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import Header from "./components/header/header";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
