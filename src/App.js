import {AppBar, Button, Toolbar, Typography} from '@material-ui/core'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Anime from './Anime'
import './App.css'
import Title from './Title'
import Character from './Character'
function App() {
  const AnimeQuotes = () => {
    const [quote, setQuote] = useState('')

    const handleClick = e => {
      e.preventDefault()
      window.location.reload()
    }

    const randomQuotes = () => {
      axios
        .get('https://animechan.vercel.app/api/random', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        })
        .then(response => {
          setQuote(response.data)
          console.log(response.data)
        })
    }

    useEffect(() => {
      randomQuotes()
    }, [])
    return (
      <div>
        <AppBar position="static">
          <Typography color="inherit">Anime Random quote</Typography>
          <Toolbar>
            <Link to="/anime">Anime</Link>
            <Link to="/title">Title</Link>
            <Link to="/character">Character</Link>
          </Toolbar>
        </AppBar>
        <div>
          <p>{quote.quote}</p>
        </div>
        <div style={{marginTop: '15px'}}></div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClick}
        >
          Get Random Quote
        </Button>
      </div>
    )
  }
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/anime">
              <Anime />
            </Route>
            <Route path="/title">
              <Title />
            </Route>
            <Route path="/character">
              <Character />
            </Route>
            <Route path="/">
              <AnimeQuotes />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
