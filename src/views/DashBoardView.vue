<script setup lang="ts">
/*
 *
 *
 * UTILS
 */

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { IDataDashBoard } from '../Types/DataDashboard'
import $api from '../Services/Axios'

import BlueCardComponent from '../components/BlueCardComponent.vue'
import YellowCardComponent from '../components/YellowCardComponent.vue'
import ListGroup from '../components/ListGroup.vue'
import CardGroup from '../components/CardGroup.vue'
import AvatarComponent from '@/components/AvatarComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'

/*
 *
 * DATA
 */
const data = ref<IDataDashBoard | null>(null)
const loading = ref<boolean>(true)
const route = useRoute()
const gerency = ref(route.params.gerency)
const year = ref(route.params.year)
const week = ref(route.params.week)

/*
 *
 * LIFECYCLE
 */
onMounted(() => {
  console.log(gerency.value)
  getDataDashBoard()
})

/*
 *
 * METHODS
 */
const getDataDashBoard = async () => {
  loading.value = true
  try {
    //const response = await $api.get<IDataDashBoard>('/dashboard-gerencia/GERD003/2025/5')
    const response = await $api.get<IDataDashBoard>(
      '/dashboard-gerencia/' + gerency.value + '/' + year.value + '/' + week.value,
    ) //esto sera dinamico
    data.value = response.data
    console.log('INFO')
    console.log('data: ' + data.value?.gerencia)
  } catch (err) {
    console.error('Error al obtener la información', err)
  } finally {
    loading.value = false
  }
}
const useCurrency = () => {
  const formatCurrency = (
    value: number | undefined,
    locale: string = 'es-MX',
    currency: string = 'MXN',
  ): string => {
    if (typeof value !== 'number' || isNaN(value)) {
      return ''
    }
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value)
  }

  return {
    formatCurrency,
  }
}
const { formatCurrency } = useCurrency()
</script>

<template>
  <main class="min-h-screen">
    <LoaderComponent v-if="loading" />
    <Transition v-if="!loading" name="fade">
      <div v-if="!loading" class="mt-4 p-6 space-y-6">
        <div class="flex justify-between items-center">
          <h1 class="text-3xl text-customWhite font-bold text-left">Xpress-Dashboard</h1>
          <AvatarComponent :gerencia="data?.gerencia"></AvatarComponent>
        </div>

        <div
          class="grid grid-cols-1 gap-3 md:grid md:grid-cols-3 md:gap-3 sm:grid sm:grid-cols-2 sm:gap-3"
        >
          <BlueCardComponent :title="'Semana'" :amount="data?.semana"> </BlueCardComponent>
          <BlueCardComponent :title="'Año'" :amount="data?.anio"></BlueCardComponent>
          <BlueCardComponent :title="'Clientes'" :amount="data?.clientes"></BlueCardComponent>
          <BlueCardComponent :title="'Clientes Cobrados'" :amount="data?.clientesCobrados">
          </BlueCardComponent>
          <BlueCardComponent :title="'No Pagos'" :amount="data?.noPagos"></BlueCardComponent>
          <BlueCardComponent
            :title="'Numero de Liquidaciones'"
            :amount="data?.numeroLiquidaciones"
          ></BlueCardComponent>
        </div>

        <ListGroup
          :debitoMiercoles="formatCurrency(data?.debitoMiercoles)"
          :debitoJueves="formatCurrency(data?.debitoJueves)"
          :debitoViernes="formatCurrency(data?.debitoViernes)"
        ></ListGroup>

        <YellowCardComponent
          :title="'Total Debito'"
          :amount="formatCurrency(data?.debitoTotal)"
        ></YellowCardComponent>

        <CardGroup
          :primerTitulo="'Rendimiento'"
          :segundoTitulo="'Total Cobranza Pura'"
          :tercerTitulo="'Total De Descuento'"
          :primerMonto="data?.rendimiento.toString()"
          :segundoMonto="formatCurrency(data?.totalCobranzaPura)"
          :tercerMonto="data?.totalDeDescuento"
        ></CardGroup>

        <div class="grid grid-cols-2 gap-3">
          <BlueCardComponent
            :title="'Monto excedente'"
            :amount="formatCurrency(data?.montoExcedente)"
          >
          </BlueCardComponent>
          <BlueCardComponent :title="'Multas'" :amount="data?.multas"></BlueCardComponent>
          <BlueCardComponent
            :title="'Liquidaciones'"
            :amount="formatCurrency(data?.liquidaciones)"
          ></BlueCardComponent>
          <YellowCardComponent
            :title="'Cobranza Total'"
            :amount="formatCurrency(data?.cobranzaTotal)"
          ></YellowCardComponent>
        </div>

        <CardGroup
          :primerTitulo="'Monto Debito Faltante'"
          :segundoTitulo="'Numero de Ventas'"
          :tercerTitulo="'Ventas'"
          :primerMonto="formatCurrency(data?.montoDeDebitoFaltante)"
          :segundoMonto="data?.numeroVentas.toString()"
          :tercerMonto="data?.ventas"
        ></CardGroup>
      </div>
    </Transition>
  </main>
</template>
