import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Album } from "../../api/musicApi";
import FavoriteButton from "../favoriteButton/favoriteButton";
import { useGetFavoritesByIdQuery, useAddInFavoritesMutation, useRemoveFromFavoritesMutation } from "../../api/favoritesApi";
import { userData } from "../../store/auth/authSelector";

import "./albumCard.scss";

const AlbumCard = ({albumProp} : Props) =>{
    const navigate = useNavigate();
    const userId = useSelector(userData).id;
    const [addFavorites] = useAddInFavoritesMutation();
    const [removeFavorites] = useRemoveFromFavoritesMutation();

    const { data: favoriteAlbum, isFetching } = useGetFavoritesByIdQuery({
        id: albumProp.id,
        userId,
    });
    
    const changeStateFavorites = async (e: React.MouseEvent) => {
        if (!userId) {
            navigate("/login");
            return;
        }
        if (favoriteAlbum) {
            await removeFavorites({ id: albumProp.id, userId });
        } else {
            await addFavorites({ albumProp, userId });
        }
    };
    
    return (
        <article className="card">
            <div className="card__content">
                <Link className="card__cover-link" to={`/detail-album/${albumProp.id}`}>
                    <img className="card__cover-img" src={albumProp.cover} alt="album cover"/>
                </Link>
                <Link className="card__title-link" to={`/detail-album/${albumProp.id}`}>
                    <h3 className="card__title-text">{albumProp.title}</h3>
                </Link>
                <h4 className="card__author">{albumProp.author}</h4>
                <FavoriteButton
                    favoriteAlbumProp={favoriteAlbum}
                    changeStatusFavorites={changeStateFavorites}
                    isFetching={isFetching}
                />
            </div>
        </article>
    );
};

type Props = {
    albumProp: Album;
};

export default AlbumCard;