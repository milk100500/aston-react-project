import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useGetAlbumByIdQuery } from "../../api/musicApi";
import { Loader } from "../../components/loader/loader";

import { useGetFavoritesByIdQuery, useAddInFavoritesMutation, useRemoveFromFavoritesMutation } from "../../api/favoritesApi";
import FavoriteButton from "../../components/favoriteButton/favoriteButton";
import { userId } from "../../store/auth/authSelector";

import "./detailAlbum.scss";

const DetailAlbum = () => {
    const { id } = useParams();
    const uId = useSelector(userId);
    const { data: album, isLoading } = useGetAlbumByIdQuery(String(id));
    const { data: favoriteAlbum, isFetching } = useGetFavoritesByIdQuery({
        id: id ?? "",
        userId: uId,
    });
    const navigate = useNavigate();
    const [addFavorites] = useAddInFavoritesMutation();
    const [removeFavorites] = useRemoveFromFavoritesMutation();

    const changeStateFavorites = async (e: React.MouseEvent) => {
        if (!uId) {
            navigate("/login");
            return;
        }
        if (favoriteAlbum) {
            await removeFavorites({ id: id, uId });
        } else {
            await addFavorites({ albumProp: album, userId: uId });
        }
    };

    if (isLoading || !album) {
        return <Loader />;
    }

    return (
        <div className="detailAlbum">
            <div className="detailAlbum__container container">
                <div className="detailAlbum__content">
                    <div className="detailAlbum__cover">
                        <img className="detailAlbum__cover-img" src={album.cover} alt="album cover"/>
                    </div>
                    <h2 className="detailAlbum__title">{album.title}</h2>
                    <h4 className="detailAlbum__author">{album.author}</h4>
                    <h3 className="detailAlbum__year">Album release year: {album.year}</h3>
                    <h3 className="detailAlbum__tracklist-text">Tracklist:</h3>
                    <ul className="detailAlbum__tracklist">
                        {album.songs.map((track, id) => 
                            <li key={id} className="detailAlbum__tracklist-item">{`${id+1}.${track}`}</li>
                        )}
                    </ul>
                    <FavoriteButton
                        favoriteAlbumProp={favoriteAlbum}
                        changeStatusFavorites={changeStateFavorites}
                        isFetching={isFetching}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailAlbum;