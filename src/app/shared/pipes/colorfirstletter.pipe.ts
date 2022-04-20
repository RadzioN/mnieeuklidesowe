import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'colorfirstletter' })
export class ColorFirstLetter implements
PipeTransform {
    transform(value: string): any {
        return `<span class='card-title-highlight'>${value.charAt(0)}</span>${value.substring(1, 7)} <span class='card-title-highlight'>${value.charAt(8)}</span>${value.substring(9, value.length)}`;
    }
}

