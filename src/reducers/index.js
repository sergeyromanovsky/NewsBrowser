import { combineReducers } from 'redux';

// ducks
import main from '../ducks/main';
import ui from '../ducks/ui';
import filters from '../ducks/filters';

export default combineReducers({ main, ui, filters });
