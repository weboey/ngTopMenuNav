import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DropDownComponent,TreeViewComponent,TreeViewItemComponent } from './dropdown.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,NgZorroAntdModule
  ],
  declarations: [
    DropDownComponent,TreeViewComponent,TreeViewItemComponent
  ],
  exports:[DropDownComponent,TreeViewComponent,TreeViewItemComponent],
  providers: [],
})
export class DropDownModule { }
