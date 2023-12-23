
import './App.css'
import Header from './component.jsx/Header';
import Movie from './component.jsx/movie';
import data from "./component.jsx/data.json"
function App() {

  
  return (
    <div className='App'>
      <Header/>
    <div className='main'>
    {
      data.map((element,index)=>{
        return(
          <Movie
            key={index}
            Title={element.Title}
            Year = {element.Year}
            img = {element.Poster}
          />
        )
      }
      )
    }
      
    </div>
    </div>
  )
}

export default App
