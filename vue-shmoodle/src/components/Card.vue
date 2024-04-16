<script setup>

const props = defineProps({
    id:Number,
    CourseTitle:String,
    Description:String,
    tags: Array,
    imageUrl:String,
    likes:Number,
    isFavorite: Boolean,
    isTaped:Boolean,
    onClickFavorite: Function,
    onClickTaped: Function
})



</script>
<template>
    
    <div class="realtive bg-white h-60 border border-slate-200 rounded-3xl p-5 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <a v-if="onClickTaped" @click="onClickTaped"> 
        <div class="flex gap-3">
    <img class="size-32" :src="imageUrl" alt="cardimage"/>
    <div>   
        <h1 class="text-xl max-h-14 overflow-hidden font-bold gap-10">{{ CourseTitle }}</h1>
        <h1 class="text-ellipsis overflow-y-scroll hyphens-auto max-h-20 mt-0 text-slate-500">{{ Description }}</h1>
        <div v-for="tag in tags" :key="tag">#{{ tag.name }}</div>
    </div>
    
    </div>
</a>
    <div class="flex justify-between">
        <div class="flex items-center gap-2">
            <img v-if="onClickFavorite"
        @click="onClickFavorite" :src="!isFavorite ? '/images/Heart.svg' : '/images/Heart2.svg'" alt="plus" />
        <b class="text-slate-500 text-lg">{{likes}}</b>
    </div>
    </div>
</div>

</template>