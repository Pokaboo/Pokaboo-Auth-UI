/*
角色管理相关的API请求函数
*/
import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {

  /**
   * 获取角色分页列表(带搜索)
   * @param page
   * @param limit
   * @param searchObj
   * @returns {*}
   */
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  /**
   * 刪除角色
   * @param sysRoleId
   * @returns {*}
   */
  removeSysRoleById(sysRoleId) {
    return request({
      url: `${api_name}/remove/${sysRoleId}`,
      method: 'delete'
    })
  },

  /**
   * 新增角色信息
   * @param sysRole
   * @returns {*}
   */
  save(sysRole) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: sysRole
    })
  },

  /**
   * 根据id查询角色
   * @param id
   * @returns {*}
   */
  getById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },

  /**
   * 更新角色信息
   * @param role
   * @returns {*}
   */
  updateById(role) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: role
    })
  },

  /**
   * 批量删除
   * @param idList
   * @returns {*}
   */
  batchRemove(idList) {
    return request({
      url: `${api_name}/removeBath`,
      method: 'delete',
      data: idList
    })
  },

  /**
   * 获取所有角色，以及当前用户拥有的角色
   * @param id
   */
  getRolesByUserId(id) {
    return request({
      url: `${api_name}/toAssign/${id}`,
      method: 'get'
    })
  },

  /**
   * 分配角色
   * @param assginRoleVo
   * @returns {*}
   */
  assignRoles(assginRoleVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      data: assginRoleVo
    })
  }

}
