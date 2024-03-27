import request from '@/utils/request'

/**
 * 菜单管理相关的API请求函数
 * @type {string}
 */
const api_name = '/admin/system/sysMenu'

export default {

  /**
   * 获取权限(菜单/功能)列表
   * @returns {AxiosPromise}
   */
  findNodes() {
    return request({
      url: `${api_name}/findNodes`,
      method: 'get'
    })
  },

  /**
   * 删除一个权限项
   * @param id
   * @returns {AxiosPromise}
   */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: "delete"
    })
  },

  /**
   * 保存一个权限项
   * @param sysMenu
   * @returns {AxiosPromise}
   */
  save(sysMenu) {
    return request({
      url: `${api_name}/save`,
      method: "post",
      data: sysMenu
    })
  },

  /**
   * 更新一个权限项
   * @param sysMenu
   * @returns {AxiosPromise}
   */
  updateById(sysMenu) {
    return request({
      url: `${api_name}/update`,
      method: "put",
      data: sysMenu
    })
  },

  /*
查看某个角色的权限列表
*/
  toAssign(roleId) {
    return request({
      url: `${api_name}/toAssign/${roleId}`,
      method: 'get'
    })
  },

  /*
  给某个角色授权
  */
  doAssign(assginMenuVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: "post",
      data: assginMenuVo
    })
  }


}
