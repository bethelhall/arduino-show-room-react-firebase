import React, {Component, Fragment} from 'react'
import {Card, CardHeader, CardText, CardBody, CardTitle, CardFooter, CardSubtitle, Button} from 'reactstrap';
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import classes from './MainComponent.module.css'

const MainComponent = (props) => {

    return (
        <Fragment>
            <Spinner/>
            <div className={classes.Container}>
                <div className={classes.Column}>
                    <div className={classes.Card}>
                        <Card>
                            <CardHeader tag="h3">{props.first_name}:{props.last_name}</CardHeader>
                            <CardBody>
                                <CardTitle>Latitude:{props.lat}</CardTitle>
                                <CardTitle>Longitude:{props.long}</CardTitle>
                                <CardTitle>Report Message</CardTitle>
                                <CardText>{props.msg_text}</CardText>
                                <Button onClick={props.clicked}>More...</Button>
                            </CardBody>
                            <CardFooter className="text-muted">Footer</CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}


export default MainComponent
