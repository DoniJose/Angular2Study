import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'striphtmlpipe'})
export class StripHtmlPipe implements PipeTransform {
  transform(value: string): string {
    return  value ? String(value).replace(/<[^>]+>/gm, '') : '';
  }
}