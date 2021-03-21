const Comic = ({ name, image }) => {
    return (
        <div className='d-flex flex-column align-items-center pb-2 col-3'>
            <img className='img-fluid' src={image.medium_url} alt='Comic image'/>
            <label>{name}</label>
        </div>
    )
}

export default Comic;
