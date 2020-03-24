import battleComponent from './battle.component';
require('./battle.module.scss');
import lineModule from '../line/line.module';

export default angular.module('battleModule', [lineModule])
    .component('battleComponent', battleComponent())
    .name