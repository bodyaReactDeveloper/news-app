import { API_KEY } from "../Constants";
import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://newsapi.org/`,
  headers: {
    "X-Api-Key": API_KEY,
    'Authorization': API_KEY
  }

})


export const API_DATA = {
  getData() {
    return instance.get(`/v2/everything?q=bitcoin&PageSize=8&page=1`)
  },
  getDataPopular(PageSize, page = 1, text, from, to) {
    if (from == undefined || to == undefined) {
      from="2022-08-23"
      to='2022-08-23'
    }
    console.log(`https://newsapi.org//v2/everything?q=${text}&sortBy=popularity&PageSize=${PageSize}&page=${page}&${from}&to=${to}&apiKey=${API_KEY}`)
    return instance.get(`/v2/everything?q=${text}&sortBy=popularity&PageSize=${PageSize}&page=${page}&${from}&to=${to}`)
  },
  getDataRelevancy(PageSize, page = 1, text, from, to) {
    if (from == undefined || to == undefined) {
      from="2022-08-23"
      to='2022-08-23'
    }
    return instance.get(`/v2/everything?q=${text}&sortBy=relevancy&PageSize=${PageSize}&page=${page}&${from}&to=${to}`)
  },
  getDataPublishedAt(PageSize, page = 1, text, from, to) {
    if (from == undefined || to == undefined) {
      from="2022-08-23"
      to='2022-08-23'
    }
    return instance.get(`/v2/everything?q=${text}&sortBy=publishedAt&PageSize=${PageSize}&page=${page}&${from}&to=${to}`)
  }
}