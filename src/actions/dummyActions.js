import flux from 'control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class DummyActions {
    constructor() {
        this.generateActions('updateName', 'fireTest', 'spliceCount');

    }
}

export default DummyActions;



