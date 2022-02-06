import { Injectable } from '@angular/core';

@Injectable()
export class DomInjectedData {
    domId: Symbol | null = null;
    data: any;
}
