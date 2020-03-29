import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block mt-5">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold lead">
                        products
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold lead">
                        name of product
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold lead">
                        price
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold lead">
                        quantity
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold lead">
                        remove
                    </p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase font-weight-bold lead">
                        total
                    </p>
                </div>
            </div>
        </div>
    )
}
