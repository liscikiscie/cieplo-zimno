<template>
    <div class="isbn__container">
        <div class="data bookBinding">
            {{bookBinding}}
        </div>
        <div class="data bookEdition">
            {{bookEdition}}
        </div>
        <div class="data coverPrize">
            {{coverPrize}}
        </div>
        <div class="data format">
            {{bookFormat}}
        </div>
        <div class="data isbnNumber">
            {{isbn}}
        </div>
        <div class="data numberOfPages">
            {{numberOfPages}}
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'bookBinding', 'bookEdition', 'coverPrize', 'bookFormat', 'isbn', 'numberOfPages' ],
        name: 'AnnouncementISBN'
    }
</script>

<style lang="scss" scoped>
    .isbn__container {
        .data {
            height: 200px;
            width: 100px;
        }
    }

</style>
