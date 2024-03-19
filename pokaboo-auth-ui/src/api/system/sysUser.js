/*
用户管理相关的API请求函数
*/
import request from '@/utils/request'

const api_name = '/admin/system/sysUser'

export default {

  /**
   * 获取用户分页列表(带搜索)
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
   * 刪除用户
   * @param sysUserId
   * @returns {*}
   */
  removeSysUserById(sysUserId) {
    return request({
      url: `${api_name}/remove/${sysUserId}`,
      method: 'delete'
    })
  },

  /**
   * 新增用户信息
   * @param sysUser
   * @returns {*}
   */
  save(sysUser) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: sysUser
    })
  },

  /**
   * 根据id查询用户
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
   * 更新用户信息
   * @param sysUser
   * @returns {*}
   */
  updateById(sysUser) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: sysUser
    })
  },

  /**
   * 修改用户状态
   * @param id
   * @param status
   */
  switchStatus(id,status){
    return request({
      url: `${api_name}/switchStatus/${id}/${status}`,
      method: 'post'
    })
  },





}
