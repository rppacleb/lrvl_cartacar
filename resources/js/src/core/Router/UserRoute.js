import { Route, Switch } from 'react-router-dom';

import { Home } from '../../components/user/home/Index'
import { Cart } from '../../components/user/cart/Index'
import { Checkout } from '../../components/user/checkout/Index'
import { Orders } from '../../components/orders/Index'

export const WebRoute = () => {
    return (
        <Switch>
            {/* SI */}
            <Route exact path="/" render={props=>(<Home {...props} />)} />
            <Route exact path="/cart" render={props=>(<Cart {...props} />)} />
            <Route exact path="/cart/checkout" render={props=>(<Checkout {...props} />)} />
            <Route exact path="/orders" render={props=>(<Orders {...props} />)} />

            {/* 404 NOT FOUND */}
            <Route> 404 NOT FOUND </Route>
        </Switch>
    )
}