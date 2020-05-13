import React, { Component } from 'react'
import { connect } from "react-redux";
import store from "../configureStore";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Viewdetails extends Component {
    storecp = store.getState()
    productId 
    constructor(props){
        super(props)
        this.productId = this.props.match.params.id
        console.log(this.props.match.params.id)
    }
    
    render() {
    
        let product = this.storecp.auth.products.filter( (pd)=>{
            if(pd.id === this.productId){
                return pd
            }
        })
        product = product[0]

        return (
            <div className="view">
                <h3>Viewdetails</h3>
                <div>posted by:{product.name}</div>
               <div>croptype:{product.croptype}</div>
               <div>weight in kgs:{product.weight}</div>
               <div>price in rs:{product.price}</div>
               <div>location:{product.selectlocation}</div>
               <div>image:{product.files}</div>
               <div>Date:{product.startDate.toDateString()}</div>
               <Button variant="primary" className='card_btn'>
               <Link style={{color:'white'}} to="/Bidprice"> Submit bid</Link>
             </Button>
             <p>
        Back<Link to={"/Farmerhome"}>Here</Link>
    </p>
            </div>
        )
        
    }
       
}

function mapStateToProps(state) {
return {

};
}

export default connect(mapStateToProps)(Viewdetails);