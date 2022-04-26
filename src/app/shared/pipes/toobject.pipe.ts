import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toobject' })
export class ToObjectPipe implements PipeTransform {
    transform(value: any): any {
        let object = [];
        for (let key in value) {
            object.push({ key: key, value: value[key] });
        }
        return object;
    }
}