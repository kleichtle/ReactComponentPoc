import flux from 'control';
import {
    createStore, bind
}
from 'alt/utils/decorators';
import actions from './actions';

@createStore(flux)
class DummyStore {

    constructor() {

        // give a default value
        this.state = {
            value: 'foo',
            test: [1,2,3,4]
        };
    }

    @bind(actions.doAnAction)
    onUpdateCity(val) {

        
        this.setState({
            value: val
        });
        
    }


}

export default DummyStore;
