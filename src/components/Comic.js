import { Link} from "react-router-dom";

const Comic = ({ name, image, comicDetailUrl }) => {

    const getMovieId = (apiDetailUrl) => {
        const indexOfMovie = apiDetailUrl.indexOf('movie/');
        return apiDetailUrl.slice((indexOfMovie + 'movie/'.length));
    }

    return (
        <Link to={getMovieId(comicDetailUrl)} className='d-flex flex-column align-items-center pb-2 col-3'>
            <img className='img-fluid' src={image.medium_url} alt='Comic'/>
            <label>{name}</label>
        </Link>
    )
}

export default Comic;
