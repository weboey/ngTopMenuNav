/**
 * Created by Administrator on 2018/4/12.
 */

import * as MENUS from "../mock"
const menu=MENUS.MENUS;
import { Component ,Input} from '@angular/core';
@Component({
  selector: 'nz-demo-dropdown-cascading',
  template: `

      <ul nz-menu style="width: 240px;" [nzMode]="'vertical'">
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

      <ul nz-menu style="width: 240px;" [nzMode]="'inline'">
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-submenu>
          <span title>sub menu</span>
          <ul>
            <li nz-submenu><span title>sub menu222</span>
               <ul>
                    <li nz-menu-item>11rd menu item2222222222222</li>
                    <li nz-menu-item>12th menu item</li>
              </ul>
              </li>
            <li nz-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>


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


@Component({
  selector: 'tree-view',
  template: `

        <ul nz-menu style="width: 240px;" [nzMode]="'inline'">
          <tree-item *ngFor="let itemChild of menu" [item]="itemChild"></tree-item>
        </ul>

    `,
  styles  : []
})
export class TreeViewComponent {
  menu = menu;

}

@Component({
  selector: 'tree-item',
  template: `
    <ng-container *ngIf="!isLeaf();else elseBlock">
      <li nz-submenu >
      <span title>{{item.name}}</span>
      <ul>
        <tree-item *ngFor="let itemChild of item.subMenu" [item]="itemChild"></tree-item>
      </ul>
    </li>
    </ng-container>
    <ng-template #elseBlock>
      <li nz-menu-item>{{item.name}}</li>
    </ng-template>
    `,
  styles  : []
})
export class TreeViewItemComponent{

  @Input()
  item : any;

  menu = menu;

  isLeaf = function(){
    return !this.item.subMenu || !this.item.subMenu.length;
  };
}
