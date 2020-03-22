export default class appController {
    /* @ngInject */
    constructor() {
        this.title = "3battles";
    }
}
/**
 * In particolare un controller non deve:

    1) Manipolare il DOM, questo compito è riservato alle direttive (nella prorpietà "link")
    2) Formattare l’input, per questo compito è opportuno utilizzare i form Angular
    3) Formattare l’output, questo è compito dei filtri
    4) Condividere dati con altri controller, per questo compito è opportuno creare dei servizi
    5) Implementare funzionalità generali, l’implementazione di funzionalità che non riguardano direttamente l’interazione tra dati e view deve essere fatta nei servizi

 */