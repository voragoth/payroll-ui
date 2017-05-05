import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'payrollDate'
})
export class PayrollDatePipe implements PipeTransform {

  transform(date: string, args?: any): string {
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ];
    const month = date.substr(4);
    const year = date.substr(0, 4);
    return months[parseInt(month, 0) - 1] + ' ' + year;
  }

}
