import lineComponent from './line.component';
require('./line.module.scss');

export default angular.module('lineModule', [])
    .component('lineComponent', lineComponent())
    .name