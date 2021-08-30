export default function SearchInput(props) {
    return (
        <div className='input__box'>
            <input
                className='search__input'
                placeholder='Search city'
                onKeyPress={props.searchHandler}
                onChange={(event) => props.setQuery(event.target.value)}
                value={props.inputValue}
            />
        </div>
    )
}