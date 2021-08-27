import { NgControl } from '@angular/forms';

export class ValidationControl {
  private _control: NgControl;

  constructor(control: NgControl) {
    this._control = control;
  }

  get validationMessages(): string[] {
    if (this._control.invalid) {
      return Object.keys(this._control.errors).map((key: string) => {
        switch (key) {
          case 'required':
            return 'El campo es requerido.';
          default:
            break;
        }
        return null;
      });
    }
    return [];
  }
}
