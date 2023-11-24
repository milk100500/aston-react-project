import "./searchPanel.scss";

const SearchPanel = () => {

    return (
        <div className="search">
            <div className="search__container container">
                <div className="search__inputbox">
                    <input className="search__inputbox-input" type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;