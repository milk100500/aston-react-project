import { useSelector } from "react-redux";

import { useGetFavoritesQuery } from "../../api/favoritesApi";
import { userData } from "../../store/auth/authSelector";
import { Loader } from "../../components/loader/loader";
import AlbumCard from "../../components/albumCard/albumCard";

import "./favorites.scss";

const Favorites = () => {
    const userId = useSelector(userData).id;
    const { data = [], isFetching, isLoading } = useGetFavoritesQuery(userId);

    if (isFetching || isLoading) {
        return <Loader />;
    }

    return (
        <div className="favorites">
            <h2 className="favorites__title">Favorites</h2>
            <div className="favorites__container container">
                {data && data.map((album) => <AlbumCard key={album.id} albumProp={album} />)}
            </div>
        </div>
    );
};

export default Favorites;