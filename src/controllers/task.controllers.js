import getDataApi from '../helpers/getDataApi.js';
export const getData = async (req, res) => {
  const parametros = {
    brandId: 2,
    lang: 'es',
    operativeSource: 'web',
  };
  let status;
  await getDataApi(parametros)
    .then((response) => {
      status = response.status;
      if (response.status === 200) {
        return response;
      }
      throw new Error(response);
    })
    .then((response) => response.text())
    .then((result) => {
      return res.status(status).json(result);
    })
    .catch((error) => {
      return res.status(status).json(error);
    });
};
