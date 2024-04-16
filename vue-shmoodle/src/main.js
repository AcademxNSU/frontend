import './assets/main.css'
import {getAuth,onAuthStateChanged} from "firebase/auth";
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Tap from './Pages/Tap.vue'
import Home from './Pages/Home.vue'
import Feed from './Pages/Feed.vue'
import Reg from './Pages/Reg.vue'
import Login from './Pages/Login.vue'
import AddCourse from './Pages/AddCourse.vue'
import Profile from './Pages/Profile.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBngpmOMOVkOMO1dycz_TrhEU_TczrxjU4",
  authDomain: "dfrgbedfg.firebaseapp.com",
  projectId: "dfrgbedfg",
  storageBucket: "dfrgbedfg.appspot.com",
  messagingSenderId: "347167757654",
  appId: "1:347167757654:web:98c23d3804fab8db5b32f7"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const router = createRouter({
    history: createWebHistory(),
    routes:[
    {path:'/', name:'Home', component: Home},
    {path: '/card/:courseId', name:'Course'},
    {path:'/feed', name:'Feed', component: Feed,
  meta:{
    requiresAuth:true,
  }},
  {path:'/addCourse', name:'AddCourse', component: AddCourse,
  meta:{
    requiresAuth:true,
  }},
  {path:'/profile', name:'Profile', component: Profile,
  meta:{
    requiresAuth:true,
  }},
    {path:'/registration', name:'Reg', component: Reg},
    {path:'/login', name:'Login', component: Login},
    {path:'/tap', name:'Tap', component: Tap},
]
});
const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to,from,next)=> {
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      alert("you dont have access!");
      next("/");
    }
  }else{
    next();
  }
});
export default router;

  
 // Initialize Firebase
createApp(App).use(router).mount('#app')