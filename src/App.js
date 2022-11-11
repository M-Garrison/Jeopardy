import './App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  let [think, setCharacters] = useState([]);

  let [hidden, setHidden] = useState ('hidden');

  // let [hide, setHide] = useState('invisible')

  let [score, setScore] = useState(0);

  const getCharacters = () => {
    axios.get('http://jservice.io/api/random').then((response) => {
      setCharacters(response.data)
    })
  }

  const hideAnswer = () => {
    if (hidden === 'hidden'){
      setHidden('')
    }else{
      setHidden('hidden')
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const decreaseValue = () => {
    setScore(score - think[0].value)
  }
  const increaseValue = () => {
    setScore(score + think[0].value)
  }

  return(
    <div className="body">
      <h1>Jeopardy!</h1>
            <p><h3>SCORE:</h3> {score} </p>
            <p><button onClick = {decreaseValue}>Decrease</button>
            <button onClick = {increaseValue}>Increase</button>
            <button onClick = {()=>setScore(0)}>Reset Score</button></p>
      {think.map((think)=>{
        return (
          <div>
          <p><button onClick={getCharacters}>Click Here for a New Question</button></p>
          <p><Character think={think}/></p>
          <p><button onClick={hideAnswer}>Hide/Show Questions</button></p>
          <p className={hidden}>What is {think.answer}?</p>
          </div>
        )})}
    </div>
  )
}

export default App;