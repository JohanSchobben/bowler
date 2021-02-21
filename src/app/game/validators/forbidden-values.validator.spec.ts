import {forbiddenValues} from './forbidden-values.validator';
import {AbstractControl} from '@angular/forms';

describe('forbiddenValuesValidator', () => {
  it('should return no error when the value is null', () => {
    const value = null;
    const forbiddenValuesList = [];
    const formControl = {value} as AbstractControl;

    const validationFunction = forbiddenValues(forbiddenValuesList);
    const result = validationFunction(formControl);
    expect(result).toBeFalsy();
  });

  it('should return no error when the forbidden values are empty', () => {
    const value = 'John Doe';
    const forbiddenValuesList = [];
    const formControl = {value} as AbstractControl;

    const validationFunction = forbiddenValues(forbiddenValuesList);
    const result = validationFunction(formControl);
    expect(result).toBeFalsy();
  });

  it('should return no error when the name is not inside the forbidden values list', () => {
    const value = 'Jane';
    const forbiddenValuesList = ['Steve', 'Carl', 'John'];
    const formControl = {value} as AbstractControl;

    const validationFunction = forbiddenValues(forbiddenValuesList);
    const result = validationFunction(formControl);
    expect(result).toBeFalsy();
  });

  it('should return an error when the name is in the forbidden values list', () => {
    const value = 'Jane';
    const forbiddenValuesList = ['Jane'];
    const formControl = {value} as AbstractControl;

    const validationFunction = forbiddenValues(forbiddenValuesList);
    const result = validationFunction(formControl);
    expect(result).toBeTruthy();
  });
});
