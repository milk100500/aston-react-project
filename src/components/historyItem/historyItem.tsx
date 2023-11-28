import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useRemoveFromHistoryMutation } from "../../api/historyApi";
import { userData } from "../../store/auth/authSelector";
import { publicPath } from "../../commonVariables";

type Props = {
  search: string;
  searchUrl: string;
  uniqKey: string;
};

const HistoryItem = ({ search, uniqKey, searchUrl }: Props) => {
    const userId = useSelector(userData).id;
    const [removeFromHistory] = useRemoveFromHistoryMutation();

    return (
        <li className="history__list-item">
            <Link className="history__item-link" to={searchUrl}>
                <img className="history__item-img" src={publicPath + "/assets/images/search.svg"} alt="search" />
                <h3 className="history__item-info">{search}</h3>
            </Link>
            <img
                className="history__item-delete"
                src={publicPath + "/assets/images/delete-button.svg"}
                alt="search"
                onClick={() => removeFromHistory({ userId, uniqKey })}
            />
        </li>
    );
};

export default HistoryItem;