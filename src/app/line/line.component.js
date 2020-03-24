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

    static get $inject() {
        return ['$scope'];
    }

    constructor($scope) {
        this.$scope = $scope;
    }

    $postLink() {
       console.log(this.units)
    }

    parseZero(unit) {
        console.log(unit)
        console.log(this.$scope)
    }
}
//LineController.$inject = ['$element'];