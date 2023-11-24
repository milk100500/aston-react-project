import { Link } from "react-router-dom";

import { Album } from "../../api/musicApi";

import "./albumCard.scss";

type Props = {
    albumProp: Album;
};

const AlbumCard = ({albumProp} : Props) =>{
    
    return (
        <article className="card">
            <div className="card__content">
                <Link className="card__cover-link" to={`/detail-album/${albumProp.id}`}>
                    <img className="card__cover-img" src={albumProp.cover} alt="album cover"/>
                </Link>
                <Link className="card__title-link" to={`detail-album/${albumProp.id}`}>
                    <h3 className="card__title-text">{albumProp.title}</h3>
                </Link>
                <h4 className="card__author">{albumProp.author}</h4>
            </div>
        </article>
    );
};

export default AlbumCard;