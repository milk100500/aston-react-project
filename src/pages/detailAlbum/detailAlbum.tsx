import { useParams } from "react-router-dom";

import { useGetAlbumByIdQuery } from "../../api/musicApi";
import { Loader } from "../../components/loader/loader";

import "./detailAlbum.scss";

const DetailAlbum = () => {
    const { id } = useParams();
    const { data: album, isLoading } = useGetAlbumByIdQuery(String(id));


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
                </div>
            </div>
        </div>
    );
};

export default DetailAlbum;