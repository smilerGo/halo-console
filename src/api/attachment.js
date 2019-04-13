import service from '@/utils/service'

const baseUrl = '/admin/api/attachments'

const attachmentApi = {}

attachmentApi.list = pagination => {
  return service({
    url: baseUrl,
    method: 'get',
    params: pagination
  })
}

attachmentApi.get = attachmentId => {
  return service({
    url: `${baseUrl}/${attachmentId}`,
    method: 'get'
  })
}

export default attachmentApi