import { Link } from "react-router-dom";

import { useGetSearchSuggestQuery } from "../../../api/musicApi";

const SearchList = ({
    debouncedSearch,
    handleSubmit,
}: Props) => {

    const { data: albums } = useGetSearchSuggestQuery({
        search: debouncedSearch
    });

    return (
        <>
            {(debouncedSearch && albums) && (
                <div className="search__offers">
                    <ul className="search__list">
                        {albums.map((album) => {
                            return (
                                <li className="search__list-item" key={album.id}>
                                    <Link className="search__list-link" to={`detail-album/${album.id}`}>{album.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <button className="search__list-button" type="submit" onSubmit={handleSubmit}>
                        Показать результаты по запросу: {debouncedSearch}
                    </button>
                </div>
            )}
        </>
    );
};

type Props = {
    debouncedSearch: string;
    handleSubmit: (value: React.FormEvent) => void;
};

export default SearchList;