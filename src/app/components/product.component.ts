import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit/* , DoCheck*/, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today: Date = new Date();

    constructor() {
        console.log('constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    /* ngDoCheck() {
        console.log('');d
    } */

    ngOnDestroy() {
        console.log('onDestroy');
    }

    addToCart() {
        console.log(`${this.product.title} agregado al carrito`);
        this.productClicked.emit(this.product.id);
    }
}