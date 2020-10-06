import React, { Component } from 'react';
import CartTotal from './CartTotal';
import CartItem from './CartItem';

class Cart extends Component {
    generateCartItemList = () => {
        return Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
              <CartItem 
                key={featureHash}
                featureHash={featureHash}
                feature={feature}
                selectedOption={this.props.selected[feature]}
              />
            );
        });        
    }
    render( ) {
       
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.generateCartItemList()}
                <CartTotal 
                    selected ={this.props.selected}
                    />
            </section>
        )
    }
}

export default Cart;