<template>
  <div class="container px-10">
    <h1>Catalog</h1>
    <div class="card">Product Card</div>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'

export default {
  apollo: {
    products: gql`
      query {
        allProducts {
          id
          name
          description
          image_url
          category
          price_in_cents
        }
      }
    `
  }
}
</script>

<style lang="scss" scoped></style>
