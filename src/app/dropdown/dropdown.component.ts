/**
 * Created by Administrator on 2018/4/12.
 */

import * as MENUS from "../mock"
const menu=MENUS.MENUS;
import { Component } from '@angular/core';
@Component({
  selector: 'nz-demo-dropdown-cascading',
  template: `
    <nz-dropdown>
      <a class="ant-dropdown-link" nz-dropdown>
        Cascading menu <i class="anticon anticon-down"></i>
      </a>
      <ul nz-menu>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-submenu>
          <span title>sub menu</span>
          <ul>
            <li nz-menu-item>3rd menu item</li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>
    </nz-dropdown>

     <nz-dropdown *ngFor="let item of menu">
       <a class="ant-dropdown-link" nz-dropdown>
          {{item.name}} <i class="anticon anticon-down"></i>
        </a>
        <ul nz-menu>
          <ng-container *ngFor="let itemChild of item.subMenu" >
            <ng-container *ngIf="itemChild?.subMenu?.length;else elseBlock">
              <li nz-submenu >
                  <span title>{{itemChild.name}}</span>
                  <ul>
                    <li nz-menu-item *ngFor="let itemChildLast of itemChild?.subMenu">{{itemChildLast.name}}</li>
                  </ul>
              </li>
            </ng-container>
            <ng-template #elseBlock><li nz-menu-item>{{itemChild.name}}</li></ng-template>
          </ng-container>
        </ul>
    </nz-dropdown>
    `,
  styles  : []
})
export class DropDownComponent {
  menu = menu;

}
