import {Oval} from "react-loader-spinner";
import "./loader.scss";

function Loader() {
    return (
        <div className="loader">
            <Oval
                height={80}
                width={80}
                color="#0085FF"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#adabac"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    );
}

export {Loader};