import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    OnDestroy,
} from '@angular/core';
import { DomInjectedData } from 'src/app/base/class/dom/dom-injected-data';

@Injectable({
    providedIn: 'root',
})
export class DomManagerService implements OnDestroy {
    private readonly injectedDoms: Map<Symbol, ComponentRef<any>> = new Map();

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    // Basic Dom implementation START

    private _appendComponentTo(
        component: any,
        customInjector: Injector,
        targetTagName: string = 'body'
    ) {
        const targetDom =
            document.getElementsByTagName(targetTagName) &&
            document.getElementsByTagName(targetTagName)[0];
        if (targetDom) {
            const componentRef = this.componentFactoryResolver
                .resolveComponentFactory<any>(component)
                .create(customInjector);

            this.appRef.attachView(componentRef.hostView);

            const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
                .rootNodes[0] as HTMLElement;

            targetDom.appendChild(domElem);
            return componentRef;
        }
        return null;
    }

    private _removeComponentFromDom(componentRef: ComponentRef<any> | null) {
        if (componentRef !== null) {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }
    }

    private _prepareInjector(domId: Symbol, data: any): Injector {
        return Injector.create({
            providers: [
                {
                    provide: DomInjectedData,
                    useValue: {
                        domId: domId,
                        data: data,
                    },
                },
            ],
            parent: this.injector,
        });
    }

    // Basic Dom implementation END

    addComponentToBody(
        component: any,
        injectedData?: any,
        customDomId?: Symbol | any
    ): Symbol | null {
        if (component) {
            const domId = customDomId || Symbol();
            const componentRef = this._appendComponentTo(
                component,
                this._prepareInjector(domId, injectedData)
            );
            if (componentRef) {
                this.injectedDoms.set(domId, componentRef);
                return domId;
            }
            return null;
        }
        return null;
    }

    removeComponent(domId: Symbol | null) {
        if (domId && this.injectedDoms.has(domId)) {
            const componentRef = this.injectedDoms.get(domId) || null;
            this._removeComponentFromDom(componentRef);
        }
    }

    removeAll() {
        if (this.injectedDoms && this.injectedDoms.size) {
            this.injectedDoms.forEach((componentRef) => {
                this._removeComponentFromDom(componentRef);
            });
        }
    }

    ngOnDestroy(): void {
        this.removeAll();
    }
}
