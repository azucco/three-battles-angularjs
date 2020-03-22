import angular from 'angular'; // oggetto globale
import battleModule from './battle/battle.module';
import appController from './app.controller';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('mainApp', [battleModule]) // metodo module('moduleName', [dependencies, ...])
    .controller('appController', appController)