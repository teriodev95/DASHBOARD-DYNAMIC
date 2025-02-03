import $api from '../Services/Axios'
import type { IDataDashBoard } from '@/Types/DataDashboard'
import { ref } from 'vue'

export default function useApiDashboard() {
  const data = ref<IDataDashBoard | null>(null)
  const loading = ref<boolean>(false)

  const getDataDashBoard = async () => {
    loading.value = true
    try {
      const response = await $api.get('/dashboard-gerencia/GERD003/2025/3')
      data.value = response.data 
      console.log("INFO");
     // console.log("data: "+data.value?.clientes)
    } catch (err) {
      console.error('Error al obtener la información', err)
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    getDataDashBoard, 
  }
}
