import React from 'react';
import Content from './Contenet';
import Header from './Header';
class App extends React.Component{
    render(){

        return(
            <div>
                <Header title={this.props.headerTitle} />
                <Content title={this.props.contentsTitle}
                        body={this.props.contentsBody}/>
            </div>
        );
    }
}

export default App;