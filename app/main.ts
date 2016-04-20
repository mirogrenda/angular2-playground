import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from './app.component';
import {AppAvatarComponent} from './components/avatar/component'

bootstrap(AppComponent, [AppAvatarComponent]);
bootstrap(AppAvatarComponent);