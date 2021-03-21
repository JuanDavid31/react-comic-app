import Comic from "./Comic";

const ComicsGrid = ({ comics }) => {
    return (
        <div className='container py-3 row mx-auto'>
            {comics.map(comic => <Comic key={comic.id} name={comic.name} image={comic.image} /> )}
        </div>
    )
};

export default ComicsGrid;
