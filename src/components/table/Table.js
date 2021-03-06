import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { resizeHandler } from "./table.resize";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponent {
    static className = 'exel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable();
    }

    // onClick() {
    //     console.log('click');
    // }

    onMousedown(event) {
        if(shouldResize(event)) {
            resizeHandler(this.$root, event)
        }
    }

    // onMousemove() {
    //     console.log('mousemove');
    // }

    // onMouseup() {
    //     console.log('mouseup');
    // }
}