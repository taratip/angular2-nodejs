/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './message.component.ngfactory';
import * as import2 from './message.component';
import * as import3 from './message.service';
import * as import4 from '@angular/common';
import * as import5 from './message-list.component';
var styles_MessageListComponent = [];
export var RenderType_MessageListComponent = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_MessageListComponent,
    data: {}
});
function View_MessageListComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-message', [], null, null, null, import1.View_MessageComponent_0, import1.RenderType_MessageComponent)),
        import0.ɵdid(24576, null, 0, import2.MessageComponent, [import3.MessageService], { message: [
                0,
                'message'
            ]
        }, null)
    ], function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    }, null);
}
export function View_MessageListComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-8 col-md-offset-2'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n      '])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_MessageListComponent_1)),
        import0.ɵdid(401408, null, 0, import4.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n  ']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.messages;
        ck(v, 4, 0, currVal_0);
    }, null);
}
function View_MessageListComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-message-list', [], null, null, null, View_MessageListComponent_0, RenderType_MessageListComponent)),
        import0.ɵdid(57344, null, 0, import5.MessageListComponent, [import3.MessageService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var MessageListComponentNgFactory = import0.ɵccf('app-message-list', import5.MessageListComponent, View_MessageListComponent_Host_0, {}, {}, []);
