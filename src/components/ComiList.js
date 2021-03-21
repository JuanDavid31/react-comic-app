import Comic from "./Comic";

const ComicsList = ({ comics }) => {
    return (
        <ul className='container py-3 d-flex flex-column align-items-center'>
            {comics.map(comic => <Comic key={comic.id} name={comic.name} image={comic.image} /> )}
        </ul>
    )
};

export default ComicsList;
