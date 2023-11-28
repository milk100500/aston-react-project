import { Album } from "../../api/musicApi";
import AlbumCard from "../albumCard/albumCard";

type Props = {
  searchQueryParam: string | null;
  albumsProp: Album[];
};

const SearchQuery = ({ searchQueryParam, albumsProp }: Props) => {
    return (
        <div className="searchpage__container container">
            <div className="searchpage__result">
                {albumsProp.map((album) => (
                    <AlbumCard key={album.id} albumProp={album} />
                ))}
            </div>
        </div>
    );
};

export default SearchQuery;