import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DropDownComponent } from './dropdown.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,NgZorroAntdModule
  ],
  declarations: [
    DropDownComponent
  ],
  exports:[DropDownComponent],
  providers: [],
})
export class DropDownModule { }
