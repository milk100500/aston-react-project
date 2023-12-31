import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { userId } from "../../store/auth/authSelector";
import { searchData } from "../../store/search/searchSelector";
import { useDebounce } from "../../hooks/useDebounce";

import { AppDispatch } from "../../store";
import { setSearchValue } from "../../store/search/searchSlice";
import { useAddInHistoryMutation } from "../../api/historyApi";
import { publicPath } from "../../commonVariables";

import SearchList from "./searchList/searchList";

import "./searchPanel.scss";

const SearchPanel = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const searchValue = useSelector(searchData);
    const id = useSelector(userId);
    const [addInHistory] = useAddInHistoryMutation();
    const debouncedSearch = useDebounce(searchValue.search, 500);

    const [isFocus, setFocus] = useState(false);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!debouncedSearch) {
            return;
        }
    
        navigate(`/search?searchquery=${debouncedSearch}`);
    
        if (id) {
            await addInHistory({
                searchUrl: window.location.href,
                userId: id,
                search: debouncedSearch,
            });
        }
    };

    return (
        <div className="search">
            <div className="search__container container">
                <form onSubmit={handleSubmit} className="search__form">
                    <input className="search__form-input" 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            dispatch(setSearchValue({ searchValue: e.target.value }))
                        } 
                        value={searchValue.search} 
                        onFocus={() => setFocus(true)}
                        onBlur={() => setTimeout(()=>setFocus(false), 500)}
                        type="text"
                        placeholder="Search"/>
                    <img className="search__form-button" onClick={handleSubmit} src={publicPath + "assets/images/search.svg"} alt="search button"/>
                    {isFocus && debouncedSearch ? 
                        <SearchList debouncedSearch={debouncedSearch} handleSubmit={handleSubmit} /> 
                        : null}
                </form>
            </div>
        </div>
    );
};

export default SearchPanel;