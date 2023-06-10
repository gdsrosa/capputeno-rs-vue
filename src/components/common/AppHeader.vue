<template>
  <header class="flex justify-between bg-white h-20 w-full items-center mx-auto px-10">
    <span class="font-lg">Capputeeno</span>
    <div class="flex justify-between max-w-xs">
      <SearchBar />
      <div>Bag</div>
    </div>
  </header>
</template>

<script lang="ts">
import SearchBar from './SearchBar.vue'
export default {
  components: { SearchBar },
  setup() {
    return {
      SearchBar
    }
  }
}
</script>
