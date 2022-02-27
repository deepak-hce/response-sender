import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'extractError',
})
export class ExtractErrorPipe implements PipeTransform {
    transform(errors: any): string | null {
        if (errors && errors.message && typeof errors.message === 'string') {
            return errors.message;
        }
        return null;
    }
}
