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
    import AnnouncementRout from '../componets/Announcements/AnnouncementRout.vue'
    import AnnouncementsBooks from '../assets/books/AnnouncementsContentService'

    let Announcements = {
        name: 'Announcements',
        components: {
            AnnouncementRout
        },
        data(){
            return {
                annon: AnnouncementsBooks
            }
        },
        created(){
            console.log(this.annon);
        }
    };
    export default Announcements;
</script>

<style scoped lang="scss">

</style>
