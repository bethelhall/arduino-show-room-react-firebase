import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import classes from './Toolbar.module.css'
import Typography from '@material-ui/core/Typography'

const Toolbar = (props) => {

    return (
        <div className={classes.Color}>
        <div className={classes.Shadow}>
            <Jumbotron fluid>
                <Container fluid>
                    <div style={{textAlign:'center', marginTop:'60px'}}>
                    <h1 className="display-3">Save Water, Save LIFE!</h1>
                    <h2 className="lead">A beginning of new Era with better access to quality WATER!!</h2>
                    </div>
                </Container>
            </Jumbotron>
        </div>
        </div>
    )
};

export default Toolbar