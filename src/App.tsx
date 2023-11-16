import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import Login from "./pages/login/login";
import Header from "./components/header/header";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
