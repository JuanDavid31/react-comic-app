const Header = ({ onShowListClick, onShowGridClick}) => {
    return (
        <header className="App-header className=d-flex flex-row">
            <button className='btn btn-info me-2' onClick={() => onShowGridClick() }>Show grid</button>
            <button className='btn btn-info ms-2' onClick={() => onShowListClick() }>Show list</button>
        </header>
    )
}

export default Header
