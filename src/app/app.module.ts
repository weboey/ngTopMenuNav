import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
//import { DropDownComponent } from './dropdown/dropdown.component';
import { DropDownModule } from './dropdown/dropdown.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,DropDownModule,BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
