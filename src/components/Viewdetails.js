import React, { Component } from 'react'
import { connect } from "react-redux";
import store from "../configureStore";

class Viewdetails extends Component {
    storecp = store.getState()
    productId 
    constructor(props){
        super(props)
        this.productId = this.props.match.params.id
        console.log(this.props.match.params.id)
    }
    
    render() {
        debugger
        let product = this.storecp.auth.products.filter( (pd)=>{
            if(pd.id === this.productId){
                return pd
            }
        })
        product = product[0]
        return (
            <div>
                <h3>Viewdetails</h3>
                {product.name}
            </div>
        )
    }
}

function mapStateToProps(state) {
return {

};
}

export default connect(mapStateToProps)(Viewdetails);