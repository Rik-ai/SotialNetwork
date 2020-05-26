export const buildAxiosRequestConfig = payload => {
  const {
    url,
    method,
    params,
    headers,
    data,
    token,
    organisationId
  } = payload

  if(
    !url ||
    !method
  ) {
    throw new Error('Missing some payload request params {url, method ...}')
  }

  const axiosRequestConfig = {
    url,
    method,
    params: {},
    headers: {}
  }

  if(params) {
    axiosRequestConfig['params'] = params
  }

  if(organisationId) {
    axiosRequestConfig['params'] = {
      ...axiosRequestConfig['params'],
      organisationId
    }
  }

  if(headers) {
    axiosRequestConfig['headers'] = headers
  }

  if(data) {
    axiosRequestConfig['data'] = data
  }

  axiosRequestConfig['headers']['Authorization'] = `Bearer ${token}`

  return axiosRequestConfig
}
