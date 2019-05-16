import { Pipe, PipeTransform } from '@angular/core';

import { RadioGroupButtonOption } from '../interfaces';

@Pipe({
  name: 'filterIngredientOptions',
  pure: false
})
export class FilterIngredientOptionsPipe implements PipeTransform {
  transform(
    initOptions: RadioGroupButtonOption[],
    defaultIngredients: string[],
    customIngredients: string[]
  ): RadioGroupButtonOption[] {
    return initOptions.filter(
      option =>
        !defaultIngredients.includes(option.title) &&
        !customIngredients.includes(option.title)
    );
  }
}
