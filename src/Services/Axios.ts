import axios from "axios";
import type { AxiosRequestHeaders } from "axios";

const $api = axios.create({
    baseURL: 'https://sfast-api.terio.xyz/xpress/v1',
  });
  
  $api.interceptors.request.use(req => {
    /* Append content type header if its not present */
    if (!(req.headers as AxiosRequestHeaders)['Content-Type']) {
      (req.headers as AxiosRequestHeaders)['Content-Type'] = 'application/json';
    }
    return req;
  });
  
  $api.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        // Problema de conexión detectado
        const connectionStatusEvent = new CustomEvent('connection-status', {
          detail: { isOnline: false, message: 'No se puede conectar al servidor' },
        });
        window.dispatchEvent(connectionStatusEvent);
      }
      return Promise.reject(error);
    },
  );

  export default $api;