import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from './app.component';
import {AppAvatarComponent} from './components/avatar/component';
import {AppButton} from './components/button/component';

bootstrap(AppComponent, [AppAvatarComponent, AppButton]);