import { Route, Switch } from 'react-router-dom';

import { Home } from '../../components/home/Index';
import { Preview } from '../../components/home/tools/preview/Index';
import { Products } from '../../components/products/Index';
import { Subscription } from '../../components/products/accredited/subscription/Index';
import { Create as SubCreate } from '../../components/products/accredited/subscription/create/Index';
import { Promo } from '../../components/products/accredited/promo/Index';
import { Create as PrmCreate } from '../../components/products/accredited/promo/create/Index';
import { ToolProvider } from '../context/ToolContext';

export const WebRoute = () => {
    return (
        <ToolProvider>
            <Switch>
                {/* HOME ROUTES */}
                <Route exact path="/" render={props=>(<Home {...props} />)} />
                <Route exact path="/tool/preview/:tid" render={props=>(<Preview {...props} />)} />

                {/* PRODUCT ROUTES */}
                <Route exact path="/products/:tab" render={props=>(<Products {...props} />)} />
                <Route exact path="/products/accredited/subscription" render={props=>(<Subscription {...props} />)} />
                <Route exact path="/products/accredited/subscription/create" render={props=>(<SubCreate {...props} />)} />
                <Route exact path="/products/accredited/promo" render={props=>(<Promo {...props} />)} />
                <Route exact path="/products/accredited/promo/create" render={props=>(<PrmCreate {...props} />)} />

                {/* 404 NOT FOUND */}
                <Route> 404 NOT FOUND </Route>
            </Switch>
        </ToolProvider>
    )
}