import axios from 'axios'
import httpBuilder from './httpBuilder'

const baseClient = axios.create({
  baseURL: 'https://localhost:44393/api'
})

export const httpClient = httpBuilder(baseClient)
