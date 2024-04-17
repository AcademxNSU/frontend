<script setup>
import FeedHeader from '../components/FeedHeader.vue'
import { useRouter } from 'vue-router';
import CardList from '../components/CardList.vue'
import {onMounted,reactive,ref, watch} from 'vue'
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const courses = ref([]);
const auth = getAuth();
const user = auth.currentUser;
const router = useRouter()
const filters = reactive({
 sortBy: 'CourseTitle',
 search: '',
});



const onChangeInput = event => {
   filters.search = event.target.value
}


const fetchTaps = async () => {
  try {
    const { data:taps } = await axios.get(`https://69cae0cd8c99a38b.mokky.dev/taps`)
    
    courses.value = courses.value.map(course => {
      const tap = taps.find((tap) => tap.productId === course.id);
      
      if(!tap){
        return course;
      }
      return {
      ...course,
      isTaped: true,
      tapId: tap.id};
      
    });
     
    
  } catch (err) {
    console.log(err)
  }


}


const formatData = async () => {
  const formatted = []
  let course
  try {
    const { data } = await axios.get(`https://69cae0cd8c99a38b.mokky.dev/taps`)
    data.forEach(element => {
      let desc = [];
      desc = element.course_id
      
      formatted.push(desc);
      
    });
  const mostFrequentNum = Object
  .entries(formatted.reduce((acc, n) => (acc[n] = (acc[n] ?? 0) + 1, acc), {}))
  .reduce((acc, n) => (acc[n[1]] = +n[0], acc), [])
  .pop();
  

  data.forEach(element => {
    if(element.course_id == mostFrequentNum){
      course = element.course_names
    }
  })
  return course;

} 
  catch (err) {
    console.log(err)
  }

}

const getRecomendation = async () => {
  const data = await formatData()
  console.log(data)
  const recomendation = await axios.get(`http://127.0.0.1:5000/recommendation?name=${data}`)
  const rec = recomendation.data.recomendation
  const recommendedCourses = []
  rec.forEach((value) => {
    recommendedCourses.push(courses.value[value])
  })
  courses.value = recommendedCourses
}
 
  

const fetchItems = async () => {
   try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.search) {
      params.CourseTitle = `*${filters.search}*`
    }

    const { data } = await axios.get(`https://69cae0cd8c99a38b.mokky.dev/courses`, {
      params
    })

    courses.value = data.map((obj) => ({
      ...obj,
      //isFavorite: false,
      //favoriteId: null,
      isTaped: false
    }))
  } catch (err) {
    console.log(err)
  }

}

const tap = async (course) => {
  try {
if (!course.isTaped) {
      const obj = {
        course_id: course.id,
        user_id: user.uid,
        course_names: course.CourseTitle
      }
      course.isTaped = true;
  router.push({ name: 'Course', params: { courseId: course.id}})
  const { data } = await axios.post(`https://69cae0cd8c99a38b.mokky.dev/taps`, obj)
 
  course.tapId = data.id

}else {
      course.isTaped = false
      await axios.delete(`https://69cae0cd8c99a38b.mokky.dev/taps/${course.tapId}`)
      course.tapId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const addToFavorite = async (item) => {
   item.isFavorite = true;
}

onMounted(async()=>{
   await fetchItems();
  //  await fetchFavorites();
   await fetchTaps();
  
});
watch(filters, fetchItems, fetchTaps);


</script>

<template>
    <div>
   
 <FeedHeader />
 
 <div class="p-10"> 
    <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold mb-8">Все курсы</h2>
    <div class="relative">
    <img class="w-5 absolute left-48 top-3" src="/images/SEARCH.svg" alt="search"/>
    <input @input="onChangeInput" type="text" class="bg-gray-100 w-96 border ml-44 rounded-md py-2.5 pl-11 pr-4 outline-none focus:border-gray-400" placeholder="Поиск..."/>
    </div>

  
    <div v-on:click="getRecomendation" class="flex justify-between items-center font-mono bg-gray-100 text-xl font-bold text-white rounded-xl  cursor-pointer transition hover:-translate-y-1 hover:shadow-xl pl-4 h-14 gap-2 pr-4">
      <img src="/images/ai.svg" alt="ai"/>
      <p class="text-black font-bold">Индивидуальный контент</p>
    </div>
    </div>
    
<CardList :courses="courses" @add-to-favorite="addToFavorite" @tap = "tap"/>
</div> 
</div>
 
</template>
