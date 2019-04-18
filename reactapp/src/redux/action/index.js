/**
 * @author patrick
 * @created 2019/04/18 09:19:25
 */
/**
 * Action 类型
 */
export const Type = {
  SWITCH_MENU: 'SWITCH_MENU'
}
export function switchMenu(menuName) {
  return {
    type: Type.SWITCH_MENU,
    menuName
  }
}
