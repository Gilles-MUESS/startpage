import './Search.scss';

const Search = ({ className }) => {
  return (
    <div className={`search-searchform ${className}`}>
      <form action='https://google.com/search' method='get'>
        <input type='text' name='q' id='q' placeholder='Search...' />
        <button type='submit'>Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
