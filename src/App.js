import React, { Component } from 'react'
import { render } from 'react-dom'
import {getProducts, deleteProduct} from './actions/actions.js';
import {browserHistory} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {


    componentWillMount() 
    {
        this.props.getProducts(`query{products {_id title price quantity imgUri }}`);
    }


   render() {
       console.log("came here in render");
	    console.log(this.props.products);
      return (
			
         <div className="row">		
            <div className="col-md-12">
                <h1 className="text-center text-primary">Products</h1>
                <div className="table-responsive">
                    <table id="mytable" className="table table-bordered">
                        <thead>
                            <th className="text-danger">Title</th>
                            <th className="text-danger">Quanity</th>
                            <th className="text-danger">Price</th>
                            <th className="text-danger">Edit</th>
                            <th className="text-danger">Delete</th>
                        </thead>
                        <tbody>

                            {
                                this.props.products.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.title}</td>
                                        <td>{value.quantity}</td>
                                        <td>{value.price}</td>
                                        <td>
                                            <button className="btn btn-primary btn-xs" onClick = {(e)=> this.editProduct(e, value._id)}>
                                                <span className="glyphicon glyphicon-pencil"></span>
                                            </button>
                                        </td>
                                         <td>
                                            <button className="btn btn-danger btn-xs" onClick = {(e)=> this.deleteProduct(e, value._id)}>
                                                <span className="glyphicon glyphicon-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

         
      );
   }


 
   deleteProduct(e, _id)
   {
        this.props.deleteProduct(_id);
   }


   editProduct(e, _id)
   {
        alert(_id);
   }


}



const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (payload) => {
      return dispatch(getProducts(payload));
    },
    deleteProduct: (_id) => {
      return dispatch(deleteProduct(_id));
    },
  }
};


const mapStateToProps = (state) => {
  return {
    products: state.todos.products
  }  
};


export default connect(mapStateToProps, mapDispatchToProps)(App);