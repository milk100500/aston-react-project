import { Link } from "react-router-dom";

import "./error.scss";

function Error() {
    return (
        <div className="error">
            <div className="error__container container">
                <div className="error__text">
                    <h1 className="error__text-heading">Something went wrong</h1>
                    <Link className="error__text-return" to="/">Go back to the main page?</Link>
                </div>
            </div>
        </div>
    );
}

export default Error;