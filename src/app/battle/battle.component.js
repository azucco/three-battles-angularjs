export default function battleComponent() {
    return {
        template: require('./battle.component.html'),
        controller: BattleController,
        controllerAs: 'b'
    }
}


class BattleController {
    constructor() {
        this.armies = [
            { units: [0, 0, 0], color: "red"},
            { units: [0, 0, 0], color: "blue" },
            { units: [0, 0, 0], color: "green" },
            { units: [0, 0, 0], color: "yellow" }
        ]
    }

    changeUnitNum(unit) {
        let units = this.armies[unit.armyIndex].units;
        units[unit.unitIndex] = unit.unitValue;
        this.total = this.getTotal(units);
    }

    getTotal(units) {
        return units.reduce((a, b) => a + b);
    }
}