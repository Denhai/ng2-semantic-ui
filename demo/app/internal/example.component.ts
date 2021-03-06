import {Component, Input} from '@angular/core';

import {Collapse} from "../../../components/collapse";
// import {Collapse} from "ng2-semantic-ui/ng2-semantic-ui";

import {Codeblock} from "ng2-prism/codeblock";
import {Markup} from "ng2-prism/languages";

@Component({
    selector: 'example',
    directives: [Collapse, Codeblock, Markup],
    template: `
<div class="example">
    <div class="info">
        <ng-content select="[info]"></ng-content>
        <i class="icon code" (click)="detail = !detail" title="View code"></i>
    </div>
    <div class="html ui top attached segment">
        <ng-content select="[result]"></ng-content>
        <div class="ui top attached label">
            Example
            <i class="edit icon visible" (click)="detail = !detail"></i>
        </div>
    </div>
    <div [suiCollapse]="!detail">
        <div class="annotation transition visible">
            <div class="ui instructive bottom attached segment">
                <codeblock [src]="code"></codeblock>
            </div>
        </div>
    </div>
</div>
`
})
export class Example {
    private detail:boolean = false;

    @Input() public code:string;
}