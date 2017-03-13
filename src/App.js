import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component 
{
    render() 
    {
        const {fetching} = this.props;
        console.log(fetching);

        return(

            <div>  

               {this.props.children}

               {fetching && <img src="http://static.spotapps.co/assets/widgets/loading.gif" alt="" 
                    style={{display : "block", position: "absolute", left : "45%", top : "40%"}} width="70px" height="70px" />}

            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.crudProducts.fetching
  }  
};


export default connect(mapStateToProps, null)(App);