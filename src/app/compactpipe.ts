import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'compactpipe'})
export class CompactPipe implements PipeTransform {
  transform(value: string, numberOfCharacters: number): string {
    return  String(value).length > numberOfCharacters ? value.slice(0, numberOfCharacters) : value;
  }
}