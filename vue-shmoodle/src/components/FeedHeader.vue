<template>
    <header class="flex justify-between border-b border-slate-300 py-9 px-9">
        <div class="flex items-center">
            <img src="/images/9.png" alt="Logo"/>
        <div>
            <router-link to="/">
                <h2 class="text-5xl font-bold uppercase">AcademeX</h2>
            </router-link>
            <p class="text-slate-500">Лучшая образовательная платформа</p>
        </div>
    </div>
    <ul class="flex items-center gap-9 text-gray-500">
        <router-link to="/addCourse">
        <li class="flex items-center cursor-pointer gap-1 hover:text-black" >
            <img class="w-10" src="/images/Create.svg" alt="Create">
            <b >Создать курс</b>
        </li>
    </router-link>
        <li class="flex items-center cursor-pointer gap-1 hover:text-black">
            <img src="/images/Heart.svg" alt="Heart">
            <b>Закладки</b>
        </li>
        <router-link to="/profile">
            <li class="flex items-center cursor-pointer gap-1 hover:text-black">
            <img src="/images/Male User.svg" alt="Male user">
            <b>Профиль</b>
        </li>
        </router-link>
    </ul>
 </header>   
</template>

<script setup>

</script>