import {AbstractControl} from '@angular/forms';

export const forbiddenValues = (values: string[]) =>
  (control: AbstractControl): {[key: string]: true} | null => {
    const containsName = values.find(value => control?.value?.trim() === value?.trim());
    if (containsName){
      return {forbiddenValue: true};
    }
    return null;
  };

