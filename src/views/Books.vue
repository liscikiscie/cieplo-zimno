<template>
    <div class="books">
        <BookRout
                v-for="book in books"
                :key="book.id"
                :id="book.id"
                :title="book.title"
                :author="book.author"
                :imgSrc="book.imgSrc"
                :shortDesc="book.shortDescription"
                :isbn="book.ISBN"
                :shops="book.shops"
                :reviews="book.reviews"
        >
        </BookRout>
    </div>
</template>

<script>
    import BookRout from '../componets/BookRout.vue'
    import Library from '../assets/books/BooksContentService'

    export default {
        name: 'Books',
        components: {
            BookRout
        },
        data() {
            return {
                books: Library
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
