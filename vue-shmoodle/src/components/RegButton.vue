<script setup>
import {onMounted,ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth,onAuthStateChanged} from "firebase/auth";
const isLoggedInn = ref(false);
const router = useRouter();
  const OnRegistrationPage = ()=>{
    router.push("/registration");
  };
 
  const OnLoginPage = ()=>{
    router.push("/login");
  };
  let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth,(user)=> {
      if (user){
        isLoggedInn.value = true;
      }else{
        isLoggedInn.value = false;
      }
  });
});


</script>

<template>
      <ul class="flex items-center text-2xl gap-9 text-gray-500">
        <li v-if ="!isLoggedInn"  @click="OnRegistrationPage" class="flex items-center cursor-pointer gap-1 hover:text-black" >
            <img class="w-10" src="/images/CreateButton.svg" alt="Create">
            <b>Создать профиль</b>
        </li>
        <li v-if ="!isLoggedInn"  @click="OnLoginPage" class="flex items-center text-yellow-500 cursor-pointer gap-5 hover:text-black">
            <b>Войти</b>
        </li>
        <li v-if ="isLoggedInn" class="flex items-center cursor-pointer gap-1 hover:text-black" >
            <img class="w-10" src="/images/Create.svg" alt="Create">
            <b >Создать курс</b>
        </li>
        <li  v-if ="isLoggedInn" class="flex items-center cursor-pointer gap-1 hover:text-black">
            <img src="/images/Heart.svg" alt="Heart">
            <b>Закладки</b>
        </li>
        <router-link to="/profile">
            <li  v-if ="isLoggedInn" class="flex items-center cursor-pointer gap-1 hover:text-black">
            <img src="/images/Male User.svg" alt="Male user">
            <b>Профиль</b>
        </li>
        </router-link>
     </ul>
    
    
  
</template>