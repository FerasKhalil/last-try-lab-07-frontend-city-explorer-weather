import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export class Movie extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                  
                    <Card.Body>
                        <Card.Title>Movie cases: </Card.Title>
                        <Card.Text>
                        {this.props.title}
                           {this.props.overview}
                           {this.props.average_votes}
                           {this.props.total_votes}
                           
                           {/* {this.props.image_url} */}
                           {this.props.popularity}
                           {this.props.released_on}

                           {/* {this.props.MovieData[1].date}
                           {this.props.MovieData[1].description}
                           {this.props.MovieData[2].date}
                           {this.props.MovieData[2].description} */}
                         </Card.Text>
                    <Card.Img  src={this.props.image_url}  />
                    </Card.Body>
                    
                </Card>
            </div>
        )
    }
}

export default Movie;