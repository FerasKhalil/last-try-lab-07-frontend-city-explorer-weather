import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export class Weather extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                        <Card.Title>Weather cases: </Card.Title>
                        <Card.Text>
                        {this.props.date}
                           {this.props.description}
                           {/* {this.props.weatherData[1].date}
                           {this.props.weatherData[1].description}
                           {this.props.weatherData[2].date}
                           {this.props.weatherData[2].description} */}
                         </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>
        )
    }
}


export default Weather;
