import fetch from 'node-fetch';

export default async function getDataApi({ brandId, lang, operativeSource }) {
  const myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer ZTQ2OTM3ODEtYzExNi00YzY2LTkxY2EtNzU0ZjE0MTk1M2Ji'
  );
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Reference', 'com.vallartaplus.vallartaplus');

  const reqOption = {
    method: 'GET',
    headers: myHeaders,
  };
  const getData = await fetch(
    `https://qa-ms-vallartaadventures.vallartaplus.mx/tour/list?lang=${lang}&brand_id=${brandId}&operative_source=${operativeSource}`,
    reqOption
  );
  return getData;
}
