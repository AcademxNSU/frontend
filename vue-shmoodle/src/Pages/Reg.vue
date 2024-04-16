
<template>
  <div>
    <header class="flex justify-center border-b border-slate-300 py-9 px-9"> <h1 class="text-5xl font-bold uppercase">Регистрация</h1></header>
    <div class="flex justify-center gap-20">
      <div class="">
        <img
          src="/images/Sign up.png"
          alt="Sample image" />
      </div>

      <!-- Right column container -->
      <div>
        <form v-on:submit.prevent='redirect'>
 <!--Sign in section-->
          <div>

          <!-- Email input -->
          <div class="mb-6 pt-20">
        <label for="email" class="block mb-2 font-medium text-gray-900 text-black">Email</label>
        <p><input id="email" name="email" class=" w-96 border border-gray-300 text-gray-900 text-sm rounded-lg block p-4 bg-white-700 border-gray-600 placeholder-gray-400 text-black" placeholder="name@example.com" v-model="email" /></p>
       </div> 

          <!-- Password input -->
          <div class="mb-6">
        <label for="password"  type ="text" class="block mb-2 font-medium text-gray-900 text-black" >Пароль</label>
       <p><input type="text" id="password" class="w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 bg-white-700 border-gray-600 placeholder-gray-400 text-black" placeholder="•••••••••" v-model="password" /></p> 
       </div> 

          
          <!-- Sign-in button -->
          <div class="mb-6">
          
           <button v-on:click="registerUser"  class="font-mono bg-orange-400 text-lg font-bold text-white rounded-xl uppercase cursor-pointer transition hover:-translate-y-1 hover:shadow-xl flex-auto w-52 h-14 border" >Зарегистрироваться</button>
            <!-- <button @click.prevent="redirect">huehu9rewuerw</button> -->
            </div>
            <!-- Register link --> 
            <div class="flex justify-stretch">
              <p class="text-xl">Уже есть аккаунт? </p>
              <router-link to="/login">
             <p class="ml-6 no-underline hover:underline text-xl text-sky-600">Войти</p>
            </router-link>

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

 
</template>

<script setup>

import { useRouter } from "vue-router";
import {onMounted, ref} from 'vue'
import { getAuth,sendSignInLinkToEmail,createUserWithEmailAndPassword} from "firebase/auth";
const email = ref("");
const password = ref("");
const router = useRouter()


onMounted(() => {
  console.log('mounted')
  console.log(router.getRoutes())
})

const registerUser = async () => {  
  var credentials = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  if(credentials.user){
    console.log('success')
    router.push("/feed");
  }
  else{
    console.log(error.code);
    alert(error.message);
  }
}

</script>