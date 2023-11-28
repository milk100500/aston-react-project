import { memo } from "react";

import { ResponseParams } from "../../api/favoritesApi";
import { Loader } from "../loader/loader";

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
            <div className="card__favorite" onClick={changeStatusFavorites}>
                {isFetching ? (
                    <span>Секунду</span>
                ) : (
                    <>
                        {favoriteAlbumProp ? (
                            <button>Удалить из избранного</button>
                        ) : (
                            <button>Добавить в избранное</button>
                        )}
                    </>
                )}
            </div>
        );
    }
);

export default FavoriteButton;