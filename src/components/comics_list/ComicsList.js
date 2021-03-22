import Comic from "../comic/Comic";

const ComicsList = ({ comics }) => {
    return (
        <ul className='container py-3 d-flex flex-column align-items-center'>
            {comics && comics.map(comic => <Comic key={comic.id} comicDetailUrl={comic.api_detail_url} name={comic.name} image={comic.image} /> )}
        </ul>
    )
};

export default ComicsList;
