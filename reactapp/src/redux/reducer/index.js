/**
 * @author patrick
 * @created 2019/04/18 09:22:00
 */

/**
 * Reducer 数据处理
 */
import { Type } from '../action/index'
const initState = {
  menuName: '首页'
}
export default (state = initState, action) => {
  switch (action) {
    case Type.SWITCH_MENU: {
      return {
        ...state,
        menuName: action.menuName
      }
    }
    default:
      break
  }
}
