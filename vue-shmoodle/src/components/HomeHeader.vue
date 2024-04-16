<template>

  <header class="flex justify-between border-b border-slate-300 py-9 px-9">
        <div class="flex items-center">
            <img src="/images/9.png" alt="Logo"/>
        <div>
            <router-link to="/">
                <h2 class="text-7xl font-bold uppercase">AcademeX</h2>
            </router-link>
            <p class="text-slate-500">Лучшая образовательная платформа</p>
        </div>
    </div>
    <RegButton />
 </header>   
</template>

<script setup>
import RegButton from '../components/RegButton.vue';
</script>