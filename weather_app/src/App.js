import './App.css';
import Search from './Components/Search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange} />
    </div>
  );
}

export default App;
