import Comic from "../comic/Comic";
import RandomContext from "../../context/RandomContext";
import {useContext} from "react";

const ComicsGrid = ({ comics }) => {

    const randomContext = useContext(RandomContext);

    return (
        <div className='container py-3 row mx-auto'>
            {randomContext.value}
            <button onClick={() => randomContext.setValue('Hi from grid')}>Press me</button>
            {comics && comics.map(comic =>
                <Comic key={comic.id}
                       comicDetailUrl={comic.api_detail_url}
                       name={comic.name}
                       image={comic.image}
                /> )}
        </div>
    )
};

export default ComicsGrid;
