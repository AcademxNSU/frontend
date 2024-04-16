<script setup>
import FeedHeader from '../components/FeedHeader.vue'
</script>

<template>
 <div>
   <FeedHeader /> 
<form>
    <div class="grid mt-6">
        <div class="mb-6 pl-72">
            <label for="Название курса*" class="block mb-2 font-medium text-gray-900 text-black">Название курса</label>
            <p><input id="Название курса" name="Название курса" class=" w-96 border border-gray-300 text-gray-900 text-sm rounded-lg block p-4 bg-white-700 border-gray-600 placeholder-gray-400 text-black" placeholder="Название курса"  /></p>
        </div>
        <div class="mb-6 pl-72">
            <label for="Описание курса" class="block mb-2 font-medium text-gray-900 text-black">Описание курса</label>
            <p><input id="Описание курса" name="Описание курса" class=" w-96 border border-gray-300 text-gray-900 text-sm rounded-lg block p-4 bg-white-700 border-gray-600 placeholder-gray-400 text-black" placeholder="Описание курса"  /></p>
        </div>
        <div class="mb-6 pl-72" >
            <label for="Теги" class="block mb-2 font-medium text-gray-900 text-black">Теги</label>
            <p><input id="Теги" name="Теги" class=" w-96 border border-gray-300 text-gray-900 text-sm rounded-lg block p-4 bg-white-700 border-gray-600 placeholder-gray-400 text-black" placeholder="Теги"  /></p>
        </div>
        <div class="mb-6 pl-72" >
        <button  class="font-mono bg-orange-400 text-lg font-bold text-white rounded-xl uppercase cursor-pointer transition hover:-translate-y-1 hover:shadow-xl flex-auto w-96 h-14 border" >Создать курс</button>
    </div>
    </div>  
</form>



        </div>
</template>

