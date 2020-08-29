import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart.price)
    const total =cart.reduce((sum,course)=>sum+course.price,0)


    return (
        <div className="cart col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Order List</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> Total Course Ordered: {cart.length}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Total Amount: {total}</h6>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">View cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;