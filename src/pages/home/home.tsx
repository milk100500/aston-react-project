import { useGetAlbumsQuery } from "../../api/musicApi";
import AlbumCard from "../../components/albumCard/albumCard";
import { Loader } from "../../components/loader/loader";
import SearchPanel from "../../components/searchPanel/searchPanel";

import "./home.scss";

const Home = () => {
    const { data: albums, isLoading } = useGetAlbumsQuery();

    if(isLoading){
        return <Loader />;
    }

    return (
        <main className="main">
            <SearchPanel />
            {albums && (
                <div className="main__container container">
                    {albums.map((album) => (
                        <AlbumCard key={album.id} albumProp={album}/>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Home;