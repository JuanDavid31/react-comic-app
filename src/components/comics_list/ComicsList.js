import Comic from "../comic/Comic";
import RandomContext from "../../context/RandomContext";
import {useContext} from "react";

const ComicsList = ({ comics }) => {

    const randomContext = useContext(RandomContext);

    return (
        <>
            {randomContext.value}
            <button onClick={() => randomContext.setValue('Hi from list')}>Press me</button>
            <ul className='container py-3 d-flex flex-column align-items-center'>
                {comics && comics.map(comic => <Comic key={comic.id} comicDetailUrl={comic.api_detail_url}
                                                      name={comic.name} image={comic.image}/>)}
            </ul>
        </>
    )
};

export default ComicsList;
