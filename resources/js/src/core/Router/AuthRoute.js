import { Route, Switch } from 'react-router-dom';

import { Options as SIOptions } from '../../components/auth/si/Options';
import { Email as SIEmail } from '../../components/auth/si/Email';
import { Mobile as SIMobile } from '../../components/auth/si/Mobile';

export const WebRoute = () => {
    return (
        <Switch>
            {/* SI */}
            <Route exact path="/" render={props=>(<SIOptions {...props} />)} />
            <Route exact path="/si/email" render={props=>(<SIEmail {...props} />)} />
            <Route exact path="/si/mobile" render={props=>(<SIMobile {...props} />)} />

            {/* 404 NOT FOUND */}
            <Route> 404 NOT FOUND </Route>
        </Switch>
    )
}