/**
 *
 * @param {string} endpoint
 * @param {object} singleFile
 * @param {string} debugMsg
 * @param {object} extraParamsObj
 * @returns object
 */
export async function api_service(
  endpoint,
  singleFile,
  debugMsg,
  extraParamsObj,
) {
  let formDataRes = new FormData();
  if (!singleFile.size) singleFile['size'] = singleFile.fileSize;
  if (!singleFile.name) singleFile['name'] = singleFile.fileName;

  formDataRes.append('image', singleFile);
  if (extraParamsObj) {
    for (const [key, value] of Object.entries(extraParamsObj)) {
      console.log(`key = `, key, ` value = `, value);
      formDataRes.append(key, value);
    }
  }

  let debugMessage = debugMsg ?? '';
  let url = 'http://192.168.1.34:8000' + endpoint;
  let headers = {};
  if (token) {
    headers = {
      Authorization: 'Bearer ' + token,
      Accept: '*/*',
      'Content-Type': 'multipart/form-data;',
    };
  } else {
    headers = {
      Accept: '*/*',
      'Content-Type': 'multipart/form-data;',
    };
  }
  let configObject = {
    headers: headers,
  };
  let response = {};
  extraParamsObj
    ? console.log('extraParamsObj', JSON.stringify(extraParamsObj))
    : null;
  try {
    response = await axios.post(url, formDataRes, configObject);
    if (response?.data?.success) {
      console.log(debugMessage + ' SuccessResponse', JSON.stringify(response));
      return response;
    } else {
      console.log(
        debugMessage + ' FailureResponse...success value was false',
        JSON.stringify(response),
      );
      response['data'] = response;
      response['errorMsg'] = 'Something went wrong !!';
      return response;
    }
  } catch (error) {
    console.log(debugMessage + ' FailureResponse...inside catch', error);
    response['data'] = error?.response?.data;
    response['errorMsg'] = 'Something went wrong !!';
    return response;
  }
}
