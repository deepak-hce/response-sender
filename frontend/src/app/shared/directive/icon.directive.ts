import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewContainerRef,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IIcon } from 'src/app/base/interface/icon/i-icon';

@Directive({
    selector: 'ras-icon,[rasIcon]',
})
export class IconDirective implements OnInit, OnDestroy {
    @Input('icon') iconData: IIcon | null = null;

    iconComponent: any;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        if (this.viewContainerRef) {
            this.viewContainerRef.clear();
        }
        if (this.iconData) {
            const size =
                this.iconData && this.iconData.size ? this.iconData.size : null;
            if (this.iconData.icon) {
                this.iconComponent = this.insertFaIcon(
                    this.iconData.icon,
                    size
                );
            }
        }
    }

    insertFaIcon(icon: any, size: any) {
        const factory =
            this.componentFactoryResolver.resolveComponentFactory(
                FaIconComponent
            );
        const faIconRef = this.viewContainerRef.createComponent(factory);
        faIconRef.instance.icon = icon;
        faIconRef.instance.fixedWidth = true;
        if (size) {
            faIconRef.instance.size = size;
        }
        faIconRef.instance.ngOnChanges({});
        return faIconRef;
    }

    ngOnDestroy(): void {
        if (this.iconComponent) {
            this.iconComponent.destroy();
        }
    }
}
