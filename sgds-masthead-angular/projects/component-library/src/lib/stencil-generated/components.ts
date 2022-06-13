/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@govtechsg/sgds-masthead';




export declare interface SgdsMasthead extends Components.SgdsMasthead {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fluid', 'sgCrest']
})
@Component({
  selector: 'sgds-masthead',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fluid', 'sgCrest']
})
export class SgdsMasthead {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
