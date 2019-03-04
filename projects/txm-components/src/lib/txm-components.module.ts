import { NgModule } from '@angular/core';
import { TxmComponentsComponent } from './txm-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';

@NgModule({
  declarations: [TxmComponentsComponent, CheckboxComponent, TextinputComponent],
  imports: [
  ],
  exports: [TxmComponentsComponent, CheckboxComponent, TextinputComponent]
})
export class TxmComponentsModule { }
