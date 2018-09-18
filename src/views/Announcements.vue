<template>
    <div class="announcements">
        <AnnouncementRout
                v-for="book in annon"
                :key="book.id"
                :id="book.id"
                :title="book.title"
                :author="book.author"
                :imgSrc="book.imgSrc"
                :shortDesc="book.shortDescription"
                :isbn="book.ISBN"
        >
        </AnnouncementRout>
    </div>
</template>

<script>
    import AnnouncementRout from '../componets/AnnouncementRout.vue'
    import AnnouncementsContentSerice from '../assets/books/AnnouncementsContentSerice'

    let Announcements = {
        name: 'Announcements',
        components: {
            AnnouncementRout
        },
        data(){
            return {
                annon: AnnouncementsContentSerice
            }
        }
    };
    export default Announcements;
</script>

<style scoped lang="scss">

</style>
