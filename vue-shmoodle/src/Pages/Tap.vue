<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'

const taps = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://69cae0cd8c99a38b.mokky.dev/taps?_relations=courses'
    )
    console.log(data);
    taps.value = data.map((obj) => obj.item)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <CardList :items="taps" is-tapped />
</template>