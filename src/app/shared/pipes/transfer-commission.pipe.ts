import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transferCommission'
})
export class TransferCommissionPipe implements PipeTransform {

  transform(value: number): string {
      const fixedPercentage: number = +(value * 100).toFixed(3);
    return `${fixedPercentage}%`;
  }

}
