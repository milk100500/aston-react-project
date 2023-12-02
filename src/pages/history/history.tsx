import { useSelector } from "react-redux";

import HistoryItem from "../../components/historyItem/historyItem";
import { Loader } from "../../components/loader/loader";
import { useGetHistoryQuery } from "../../api/historyApi";
import { userId } from "../../store/auth/authSelector";

import "./history.scss";

const History = () => {
    const uId = useSelector(userId);
    const { data, isFetching, isLoading } = useGetHistoryQuery(uId);

    if (isFetching || isLoading) {
        return <Loader />;
    }

    return (
        <div className="history">
            <h2 className="history__title">History</h2>
            <div className="history__container container">
                {data && (
                    <ul className="history__list">
                        {Object.entries(data).map((searchResponse) => {
                            const [key, { search, searchUrl }] = searchResponse;
                            return (
                                <HistoryItem
                                    key={key}
                                    search={search}
                                    uniqKey={key}
                                    searchUrl={searchUrl}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
        
    );
};

export default History;