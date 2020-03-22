'use strict';

export default function lineComponent() {
    return {
        template: require('./line.component.html'),
        controller: LineController,
        controllerAs: 'l',
        bindings: {
            units: '<',
            color: '<',
            changeUnitNum: '&',
            armyIndex: '<',
            total: '<'
        }
    }
}

class LineController {
    constructor() {

    }
}