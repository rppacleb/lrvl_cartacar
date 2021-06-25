import { Route, Switch } from 'react-router-dom';

import { Home } from '../../components/admin/home/Index'
import { Create as ProdCreate } from '../../components/admin/home/create/Index'
import { Orders } from '../../components/orders/Index'

export const WebRoute = () => {
    return (
        <Switch>
            {/* SI */}
            <Route exact path="/" render={props=>(<Home {...props} />)} />
            <Route exact path="/product/create" render={props=>(<ProdCreate {...props} />)} />
            <Route exact path="/orders" render={props=>(<Orders {...props} />)} />

            {/* 404 NOT FOUND */}
            <Route> 404 NOT FOUND </Route>
        </Switch>
    )
}