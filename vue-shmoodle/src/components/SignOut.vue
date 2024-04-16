<template>
 <ul class="flex items-center text-2xl gap-9 text-gray-500">
        <li v-if ="!isLoggedInn"  @click="handleSignOut" class="flex items-center cursor-pointer gap-1 hover:text-black" >
            <img class="w-10" src="/images/Vector.svg" alt="exit">
            <b>Выйти</b>
        </li>
     </ul>
</template>

<script setup>
import {onMounted,ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from 'vue-router';
const isLoggedIn = ref(false);

const router = useRouter()

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth,(user)=> {
      if (user){
        isLoggedIn.value = true;
      }else{
        isLoggedIn.value = false;
      }
  });
});
const handleSignOut = ()=>{
  signOut(auth).then(()=>{
    router.push("/");
  });
};
  </script>
