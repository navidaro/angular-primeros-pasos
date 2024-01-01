import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character)

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit({...this.character}); //Los tres puntos son el spreed para crear un nuevo objeto del character y que no pasepor referncia

    this.character.name = '';
    this.character.power = 0;
  }
}
