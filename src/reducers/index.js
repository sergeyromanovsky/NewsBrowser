import { combineReducers } from 'redux';

// ducks
import main from '../ducks/main';
import ui from '../ducks/ui';
import filters from '../ducks/filters';
import srcNews from '../ducks/srcNews';

export default combineReducers({ main, ui, filters, srcNews });
