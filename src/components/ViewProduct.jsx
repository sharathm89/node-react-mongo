import React from 'react';
import { connect } from 'react-redux';
import {getProduct, deleteProduct} from '../actions/actions.js';
import {Link} from 'react-router';


class ViewProduct extends React.Component
{
    componentDidMount()
    {
        this.props.getProduct(this.props.params.id);
    }


    componentWillReceiveProps(nextProps) 
    {
        this.setState(nextProps.product);
        if(nextProps.product.imgUri)
            this.setState({tempImgUri : nextProps.product.imgUri});
    }


    constructor(props) 
    {
        super(props);

        this.state = {title: '', price : '', quantity : '', imgUri : "", 
                tempImgUri : "http://thecoachessite.com/new2015/wp-content/uploads/2014/11/default-placeholder-1024x1024-959x540.png"};
      
    }

  
    render() 
    {
        return(

            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-primary"><u>CRUD Operations (View)</u></h1>
                    </div>
                </div>

                <div style={{border:"1px solid #b2b2b2", padding:"10px", marginTop:"20px"}} className="col-md-6 col-md-offset-3">
                    <div className="form-group">
                        <label>Title: {this.state.title}</label>
                    </div>
                    <div className="form-group">
                        <label>Price: value={this.state.price}</label>
                    </div>
                    <div className="form-group">
                        <label>Quantity: {this.state.quantity}</label>
                    </div>
                        <div className="row" style={{marginBottom:"20px"}}>
                        <div className="col-md-12">
                            <img width="250" height="150" src={this.state.tempImgUri} alt="Invalid URL" />
                        </div>
                    </div>
                    <Link to={`/`} className="btn btn-primary">
                        <span>Back</span>
                    </Link>
                    <button type="button" className="btn btn-danger pull-right" onClick={(e)=> this.deleteProduct(e)}>Delete</button>
                </div>

             </div>

        ); 
    }

  
    deleteProduct(e)
    {
        if(confirm(`Are you sure you want to delete the '${this.state.title}' Product ?`)) 
        {
            this.props.deleteProduct(this.state._id)
            .then((err, data)=> {
                this.props.router.push('/');
            });
        }
    }

}


const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (_id) => {
      return dispatch(getProduct(_id));
    },
    deleteProduct: (_id) => {
      return dispatch(deleteProduct(_id));
    },
  }
};


const mapStateToProps = (state) => {
  return {
    product: state.crudProducts.product
  }  
};


export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);