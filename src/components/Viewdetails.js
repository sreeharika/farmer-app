import React, { Component } from 'react'
import { connect } from "react-redux";
import store from "../configureStore";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navigation from './Navgation';


class Viewdetails extends Component {
    storecp = store.getState()
    productId 
    product = []
    prod={}
    constructor(props){
        super(props)
        this.productId = this.props.match.params.id
        console.log(this.props.match.params.id)
        
        this.product = this.storecp.auth.products.filter( (pd)=>{
            if(pd.id === this.productId){
                return pd
            }
        })
        if (this.product.length>0) {
            this.prod = this.product[0]    
        }
    }
    
    productToRender = ()=>{
        if (Object.keys(this.prod).length>0) {
            return <div>
                <Navigation></Navigation>
                <h3>Viewdetails</h3>
                <div>posted by:{this.prod.name}</div>
                <div>croptype:{this.prod.croptype}</div>
                <div>weight in kgs:{this.prod.weight}</div>
                <div>price in rs:{this.prod.price}</div>
                <div>location:{this.prod.selectlocation}</div>
                <div>image:{this.prod.files}</div>
                <div>Date:{this.prod.startDate.toDateString()}</div>
                <Button variant="primary" className='card_btn'>
                <Link style={{color:'white'}} to="/Bidprice"> Submit bid</Link>
                </Button>
            </div>
        } else {
            return <div>
                Product not found
            </div>
        }
    }

    render() {

        

        return (
            <div className="view">
                <this.productToRender></this.productToRender>
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