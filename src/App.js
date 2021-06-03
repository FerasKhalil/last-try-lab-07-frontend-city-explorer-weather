// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Weather from './components/Weather';
import Movie from './components/Movie'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: [],
      inputResult: '',
      weatherResult: [],
      errorMessage: false,
      movieArr:[],

    }

  }

  // getWeather = async () => {
  //   let serverRoute = process.env.REACT_APP_SERVER;
  //   const url = `${serverRoute}/test`;
  //   console.log(serverRoute);
  //   //we need to use axios to send it(request)
  //   try {

  //     const testData = await axios.get(url);
  //     console.log(testData.data);
  //   }
  //   catch (error) {

  //   }
  // }

  saveInput = (event) => {

    this.setState({
      inputResult: event.target.value,

    });
    console.log(this.state.inputResult);
  }

  submission = async (event) => {

    event.preventDefault();
    let serverRoute = process.env.REACT_APP_SERVER;
    console.log(serverRoute);
    const url2 = `${serverRoute}/weather?cityName=${this.state.inputResult}`;
    let movieRoute = `${serverRoute}/movie?searchQuery=${this.state.inputResult}`
    try {
      const movieData = await axios.get(movieRoute);
      const weatherData = await axios.get(url2);
      this.setState({
        weatherResult: weatherData.data,
        movieArr:movieData.data,


      });
    }

    catch (error) {

    }
  }



  render() {
    return (
      <div>
        <div>
          <h1>CITY  EXPLORER </h1>
          {/* <p>to send a request from here(local react app) to our backend(local server)
              then connect them together</p> */}
          {/* <button onClick={this.getWeather}>get weather stats</button> */}

          <Form onSubmit={this.submission}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>city name</Form.Label> */}
              <Form.Control type="text" placeholder="city name" onChange={this.saveInput} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
        </div>

        {/* this.title=item.title;
this.overview=item.overview;
this.average_votes=item.vote_average;
this.total_votes=item.vote_count;
this.image_url='https://image.tmdb.org/t/p/w500'+item.poster_path;
this.popularity=item.popularity;
this.released_on=item.release_date; */}
        <div>

          {this.state.movieArr.map((element, index) => {
            return <Movie
              key={index}
              title={element.title}
              overview={element.overview}
              total_votes={element.total_votes}
              image_url={element.image_url}
              popularity={element.image_url}
              released_on={element.released_on}
            />
          })}

        </div>


        <div>
          {this.state.weatherResult.map((element, index) => {
            return <Weather
              key={index}
              date={element.date}
              description={element.description}
            />
          })}



        </div>
      </div>
    )
  }
}

export default App;