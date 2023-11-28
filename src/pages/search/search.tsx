import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import SearchPanel from "../../components/searchPanel/searchPanel";
import { AppDispatch } from "../../store";
import { useGetAlbumsBySearchQuery } from "../../api/musicApi";
import { setSearchValue } from "../../store/search/searchSlice";
import { Loader } from "../../components/loader/loader";
import SearchQuery from "../../components/searchQuery/searchQuery";

import "./search.scss";

const Search = () => {
    const dispatch: AppDispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const searchQueryParam = searchParams.get("searchquery");
    const {
        data: albums,
        isLoading,
        isFetching,
    } = useGetAlbumsBySearchQuery({
        search: searchQueryParam,
    });

    React.useEffect(() => {
        if (!searchQueryParam) {
            return;
        }
        dispatch(setSearchValue({ searchValue: searchQueryParam }));
    }, [dispatch, searchQueryParam]);
    
    if (isLoading || isFetching) {
        return <Loader />;
    }
    

    return (
        <div className="searchpage">
            {albums && (
                <>
                    <SearchPanel />
                    {albums.length ? (
                        <SearchQuery
                            searchQueryParam={searchQueryParam}
                            albumsProp={albums}
                        />
                    ) : (
                        <h2 className="searchpage__notfound">Ничего не найдено</h2>
                    )}
                </>
            )}
        </div>
    );
};

export default Search;