import request from '@/utils/request'
import { getToken } from '@/utils/auth'
import { ROAST_CONFIG } from '../config.js'

let token = getToken()

export function getRepertoryList(query, token = getToken()) {
  return request({
    // url: '/user/list',
    url: ROAST_CONFIG.API_URL + '/repertoryList',
    method: 'get',
    params: {token, page:query.page}
  })
}

export function repertoryAll(token = getToken()) {
  return request({
    // url: '/user/list',
    url: ROAST_CONFIG.API_URL + '/repertoryAll',
    method: 'get',
    params: {token}
  })
}

export function createRepertory(data, token = getToken()) {
  return request({
    url: ROAST_CONFIG.API_URL + '/repertory',
    method: 'post',
    data,
    params: {token}
  })
}

export function updateRepertory(data, token = getToken()) {
  return request({
    url: ROAST_CONFIG.API_URL + '/repertory/' + data.id,
    method: 'put',
    params: {token},
    data
  })
}

export function deleteRepertory(data, token = getToken()) {
  return request({
    url: ROAST_CONFIG.API_URL + '/repertory/' + data.id,
    method: 'delete',
    params: {token},
    data
  }) 
}
