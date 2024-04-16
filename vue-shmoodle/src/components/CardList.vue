<script setup>
import Card from './Card.vue'

defineProps({
    courses:Array,
    isFavorite: Boolean,
    isTaped: Boolean
})

const emit = defineEmits(['addToFavorite', 'tap'])


</script>
<template>
    <div class="grid grid-cols-4 gap-5 v-auto-animate">
        <Card 
        v-for="course in courses"
        :key="course.id"
        :id="course.id"
        :-course-title="course.CourseTitle"
        :-description="course.Description"
        :tags = "course.tags"
        :image-url="course.picture"
        :likes="course.likes"
        :onClickFavorite="isFavorite ? null : () => emit('addToFavorite', course)"
        :onClickTaped="isTaped ? null : () => emit('tap', course)"
        :isFavorite="course.isFavorite"
        :isTaped="course.isTaped"
        />
   
</div>

</template> 