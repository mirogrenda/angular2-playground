import {Component} from 'angular2/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './app/components/avatar/template.html',
    styleUrls: ['./app/components/avatar/style.css']
})

export class AppAvatarComponent {
    id: number;
    text: string;    
}