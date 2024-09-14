import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Hi from './Home1'
import React  from 'react';

function CardExample() {
  return (
    <div className='bg-img'>
        <Hi/>
        <a href='/chat'>
        <Button variant="primary">Primary</Button>{' '}
        </a>
        
      <Button variant="secondary">Secondary</Button>{' '}
        <div className="d-flex justify-content-around" >
        
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="https://via.placeholder.com/300.png/09f/fff?text=Basis tags" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          HTML is the standard markup language for Web pages.
          With HTML you can create your own Website.

HTML is easy to learn - You will enjoy it!
          </Card.Text>
            <a href='/Basic'>
          <Button variant="primary" >solve MCQ</Button>
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/300.png/09f/fff?text=Basis html" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            html
          </Card.Text>
         <a href='/html'>
          <Button variant="primary">Go somewhere</Button>
          </a>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/300.png/09f/fff?text=Basis html" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            react
          </Card.Text>
          <a href='/reac12'>
          <Button variant="primary">Go somewhere</Button>
          </a>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/300.png/09f/fff?text=Basis html" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href='/mongo'>
          <Button variant="primary">Go somewhere</Button>
          </a>
          
        </Card.Body>
      </Card> 
    </div>
    </div>
    
  );
}

export default CardExample;