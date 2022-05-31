import axios from 'axios'
import { repoSearchBaseUrl } from '../utility/baseUrl'

const BASEURL = repoSearchBaseUrl()
const instance = axios.create({
  baseURL: BASEURL,
})

export default instance
