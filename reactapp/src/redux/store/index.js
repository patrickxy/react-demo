/**
 * @author patrick
 * @created 2019/04/18 11:02:11
 */
/**引入createStore  数据源*/
import { createStore } from 'redux'
import reducer from '../reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'
export default () => createStore(reducer, composeWithDevTools())
