<template>
  <div class="container px-10">
    <h1>Catalog</h1>
    <main class="grid gap-4 grid-cols-3">
      <div v-for="product in allProducts" :key="product.id" class="border border-cyan-600">
        <p>{{ product.name }}</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import ALL_PRODUCTS_QUERY from '@/graphql/allProducts.query.gql'
import { type Product } from './types'

export default defineComponent({
  name: 'AppCatalog',
  setup() {
    const { result } = useQuery(ALL_PRODUCTS_QUERY)
    const allProducts = computed<Product[]>(() => result.value?.allProducts ?? [])

    console.log(result)

    return { allProducts }
  }
})
</script>

<style lang="scss" scoped></style>
