import axios from "axios";

export function fetchProducts (){
  return axios.get(`http://e-stroi.kz:8082/catalog/client/item?categoryId=11`)
  .then((res) => {
    return res.data});

}
