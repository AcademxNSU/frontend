
<template>
  <div>
    <header class="flex justify-center border-b border-slate-300 py-9 px-9"> <h1 class="text-5xl font-bold uppercase">Войти</h1></header>
    <div class="flex justify-center gap-20">
      <div class="">
        <img
          src="/images/login.png"
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
          
           <button v-on:click="login"  class="font-mono bg-orange-400 text-lg font-bold text-white rounded-xl uppercase cursor-pointer transition hover:-translate-y-1 hover:shadow-xl flex-auto w-40 h-14 border" >Войти</button>
            <!-- <button @click.prevent="redirect">huehu9rewuerw</button> -->
            </div>
            <!-- Register link --> 
            <div class="flex justify-stretch">
              <p class="text-xl">Еще не зарегистрированы? </p>
              <router-link to="/registration">
             <p class="ml-6 no-underline hover:underline text-xl text-sky-600">Создать аккаунт</p>
            </router-link>

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
 
   
</template>
<script setup>

import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref('');
const router = useRouter()
const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data)=> {
    
        console.log("Successfully signed in!");
   
        console.log(auth.currentUser);
        router.push('/feed');
    })
    .catch((error)=>{
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-credential":
                errMsg.value="Неверный email или пароль";
                break;
        }
    });
};

</script>
