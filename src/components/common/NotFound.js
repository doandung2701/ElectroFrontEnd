import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NotFound extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center',height: '600px', position: 'relative',
            backgroundImage: 'url("https://www.pixelstalk.net/wp-content/uploads/2016/08/Photos-Black-1920x1080.jpg")',
            backgroundRepeat: 'no-repeat',backgroundPosition: 'center',
            backgroundSize: 'cover'}}>
                <h1 style={{position: 'absolute',
            left: '0',right: '0',margin: 'auto',
            top: '30%', color: 'white', fontFamily :'"Comic Sans MS", cursive, sans-serif'
            }}>404 - Your requested Page Does Not Exist</h1>
                <h3  style={{position: 'absolute',
            left: '0',right: '0',margin: 'auto',
            top: '45%', color: 'white', fontFamily :'"Comic Sans MS", cursive, sans-serif'
            }}>We can't find the page you are looking for</h3>
                <Link to="/"><Button variant="outline-warning"
                size="lg" style={{position: 'absolute',
                top: '60%',left: '43%'}}>
                Take me home</Button>
                </Link>
            </div>
        )
    }
}

export default NotFound;