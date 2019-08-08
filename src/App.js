import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import MainComponent from './components/MainComponent/MainComponent'
import Footer from './components/Footer/Footer'
import axios from 'axios'

class App extends Component {


    state = {
        posts: []
    }

    handleMoreClick = () => {
        alert("More card clicked");
    }

    componentDidMount() {
        axios.get('https://riverhackathon.firebaseio.com/Report.json')
            .then(response => {
                console.log(response.data);
                const report = Object.values(response.data)
                this.setState({posts: report})
            })

    }

    render() {
        const newReports = this.state.posts.map(report => {
            return <MainComponent clicked={this.handleMoreClick} first_name={report.first_name}
                                  last_name={report.last_name}
                                  msg_text={report.msg_text} lat={report.lat} long={report.long}/>
        })

        return (
            <div className="App">
                <Toolbar/>
                {newReports}
                <Footer/>
            </div>
        );
    }
}

export default App;
