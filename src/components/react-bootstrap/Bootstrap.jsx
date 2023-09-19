import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaApple } from "react-icons/fa6";



const Bootstrap = () => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height: '200px'}} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card\'s content.
                </Card.Text>
                <Button variant="btn btn-dark">
                    <BsFillEmojiSmileFill  /> Eat Now
                </Button>
            </Card.Body>
            </Card>
        <button>
            <FaApple /> Apple
        </button>
    </div>
  )
}

export default Bootstrap;