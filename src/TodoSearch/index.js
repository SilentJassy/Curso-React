import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setsearchValue,
}) {
    return (
        <input
            placeholder="Terminar curso de React"
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setsearchValue(event.target.value)
            }}
        />
    )
}


export { TodoSearch }