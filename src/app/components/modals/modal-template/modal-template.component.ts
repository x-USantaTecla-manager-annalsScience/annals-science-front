import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent{

  @Output() event = new EventEmitter<string>();

  constructor() { }

  manageButtons(text? : string){
    if(text){
      this.event.emit(text);
    }
  }
}
