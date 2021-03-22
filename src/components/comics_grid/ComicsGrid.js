import Comic from "../comic/Comic";

const ComicsGrid = ({ comics }) => {
    return (
        <div className='container py-3 row mx-auto'>
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
