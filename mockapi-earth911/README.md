# Mock-API

This API created to simulate [Earth911 API](https://api.earth911.com/), for development use only.

</br>
</br>
</br>

## How to use?

- API works exacly as documentded in [Earth911 API documentation](https://api.earth911.com/) except the base URL is different and data can be fetched is very limited and incorrect.
  </br>
  </br>
  </br>

## Differnce between real Earth911 API and Mock API:

|                 | **Real API**                                                      | **Mock API**                                                                               |
| --------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Base URL**    | `api.earth911.com`                                                | `mockapi-earth911-ecohabit.up.railway.app`                                                 |
| **API Key**     | _Hidden and only used for deployment_                             | `dummykey`                                                                                 |
| **Example URL** | `http://api.earth911.com/earth911.methodName?arg1=val1&arg2=val2` | `https://mockapi-earth911-ecohabit.up.railway.app/earth911.methodName?arg1=val1&arg2=val2` |

</br>
</br>
</br>

## Currently availible methods:

Methods below are currently availible to use with mock api

---

- [**earth911.getLocationDetails**](https://api.earth911.com/docs/method/earth911.getLocationDetails/)

  - All data is availible to use for development

---

- [**earth911.getPostalData**](https://api.earth911.com/docs/method/earth911.getPostalData/)

  - All data is availible

---

- [**earth911.searchLocations**](https://api.earth911.com/docs/method/earth911.searchLocations/)
  - All data is availible to use for development

---
