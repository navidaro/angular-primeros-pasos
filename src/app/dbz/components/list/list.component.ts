import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public eventDeleteCharacter = new EventEmitter<string>();

  @Input()
  public  characterList: Character [] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id: string):void{
    this.eventDeleteCharacter.emit(id);
  }
}
