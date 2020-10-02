import React, { FunctionComponent } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Blog.scss'

export const Blog: FunctionComponent = () => {
    return (
        <div className="view-container">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(el => {
                    return (
                        <div className="card-container">
                            <Card style={{ width: '80rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="success">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}