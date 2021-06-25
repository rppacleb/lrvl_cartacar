import { Route, Switch } from 'react-router-dom';

import { Options as SIOptions } from '../../components/auth/si/Options';
import { Email as SIEmail } from '../../components/auth/si/Email';
import { Mobile as SIMobile } from '../../components/auth/si/Mobile';
import { Options as SUOptions } from '../../components/auth/su/Options';
import { Email as SUEmail } from '../../components/auth/su/Email';
import { Mobile as SUMobile } from '../../components/auth/su/Mobile';

export const WebRoute = () => {
    return (
        <Switch>
            {/* SI */}
            <Route exact path="/" render={props=>(<SIOptions {...props} />)} />
            <Route exact path="/si/email" render={props=>(<SIEmail {...props} />)} />
            <Route exact path="/si/mobile" render={props=>(<SIMobile {...props} />)} />

            {/* SU */}
            <Route exact path="/signup" render={props=>(<SUOptions {...props} />)} />
            <Route exact path="/su/email" render={props=>(<SUEmail {...props} />)} />
            <Route exact path="/su/mobile" render={props=>(<SUMobile {...props} />)} />

            {/* 404 NOT FOUND */}
            <Route> 404 NOT FOUND </Route>
        </Switch>
    )
}