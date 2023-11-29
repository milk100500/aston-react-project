import { memo } from "react";

import { ResponseParams } from "../../api/favoritesApi";

import "./favoriteButton.scss";

interface FavoriteButtonInterface {
  favoriteAlbumProp: ResponseParams | undefined | null;
  changeStatusFavorites: (e: React.MouseEvent) => void;
  isFetching: boolean;
}

const FavoriteButton = memo(
    ({
        favoriteAlbumProp,
        isFetching,
        changeStatusFavorites,
    }: FavoriteButtonInterface) => {
        return (
            <div className="card__favorite-box" onClick={changeStatusFavorites}>

                {isFetching ? (
                    <button className="card__favorite-button active">Секунду...</button>
                ) : (
                    <>
                        {<button className={"card__favorite-button " + (favoriteAlbumProp ? "active" : "")}>
                            {favoriteAlbumProp ? "Удалить из избранного" : "Добавить в избранное"}
                        </button>}
                    </>
                )}
            </div>
        );
    }
);

export default FavoriteButton;