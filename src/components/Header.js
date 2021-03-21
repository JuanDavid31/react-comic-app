const Header = ({ onShowListClick, onShowGridClick}) => {
    return (
        <header className="App-header className=d-flex flex-row">
            <a className='me-2' onClick={() => onShowGridClick() } >Show grid</a>
            <a className='ms-2' onClick={() => onShowListClick() }>Show list</a>
        </header>
    )
}

export default Header
