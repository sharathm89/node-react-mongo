import React from 'react';
import { connect } from 'react-redux';
import {addProduct} from '../actions/actions.js';
import {Link} from 'react-router';


class AddProduct extends React.Component
{
    constructor(props) 
    {
        super(props);
        
        this.state = {title: '', price : '', quantity : '', imgUri : '', tempImgUri : "http://thecoachessite.com/new2015/wp-content/uploads/2014/11/default-placeholder-1024x1024-959x540.png"};

        this.titleChange = this.titleChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);
        this.imgUriChange = this.imgUriChange.bind(this);

        this.submit = this.submit.bind(this);
    }

    titleChange(event) 
    {
        this.setState({title: event.target.value});
    }

    priceChange(event) 
    {
        this.setState({price: parseFloat(event.target.value, 10)});
    }

    quantityChange(event) 
    {
        this.setState({quantity: parseInt(event.target.value, 10)});
    }

    imgUriChange(event) 
    {
        this.setState({imgUri: event.target.value});
        if(event.target.value)
            this.setState({tempImgUri : event.target.value});
        else
            this.setState({tempImgUri : "http://thecoachessite.com/new2015/wp-content/uploads/2014/11/default-placeholder-1024x1024-959x540.png"});
    }


    render() 
    {
        return(

            <div className="container">
                
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-primary"><u>CRUD Operations (Create)</u></h1>
                    </div>
                </div>


                <div style={{border:"1px solid #b2b2b2", padding:"10px", marginTop:"20px"}} className="col-md-6 col-md-offset-3">
                    <form ref="form" onSubmit={this.submit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input type="text" className="form-control" required
                            value={this.state.title} onChange={this.titleChange} />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input type="number" className="form-control" step="any" required
                                        value={this.state.price} onChange={this.priceChange} />
                        </div>
                        <div className="form-group">
                            <label>Quantity:</label>
                            <input type="number" className="form-control" required
                                        value={this.state.quantity} onChange={this.quantityChange} />
                        </div>
                        <div className="form-group">
                            <label>Image URL:</label>
                            <input type="text" className="form-control" name="imgUri" 
                                        value={this.state.imgUri} onChange={this.imgUriChange} />
                        </div>
                        <div className="row" style={{marginBottom:"20px"}}>
                            <div className="col-md-12">
                                <img width="150" height="100" src={this.state.tempImgUri} alt="Invalid URL" />
                            </div>
                        </div>
                        <Link to={`/`} className="btn btn-primary">
                            <span>Back</span>
                        </Link>
                        <button type="submit" className="btn btn-primary pull-right">Submit</button>
                    </form>
                </div>


            </div>

            

        ); 
    }

    submit(e) 
    {
        e.preventDefault();
        this.props.addProduct(`mutation{createProduct(title : "${this.state.title}", quantity : ${this.state.quantity}, price : ${this.state.price}, 
            imgUri : "${this.state.imgUri}"), {_id, title, quantity, price, imgUri}}`)
        .then((err, data)=> {
            this.props.router.push('/');
        });
    }

}


const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (payload) => {
      return dispatch(addProduct(payload));
    }
  }
};


export default connect(null, mapDispatchToProps)(AddProduct);