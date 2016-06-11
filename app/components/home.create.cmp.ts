import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { BtnHomeComponent } from './btn-home.cmp';

@Component({
    selector: 'home-create',
    template: `
        <btn-home [routerLink]="['/home']"></btn-home>
        <div class="container create">
            <div>
                <input type="text" placeholder="Dojo name..." [(ngModel)]="createData.name">
            </div>
            <span class="btn action" (click)="create()">Create</span>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, BtnHomeComponent]
})
export class HomeCreateComponen {
    createData = {
        name: ''
    };

    constructor(private router: Router) {

    }

    create() {
        console.log(this.createData);
    }
}
