<template>
    <div class="reviews__container">
        <Reviews
                v-for="review in rewww"
                :author="review.author"
                :text="review.text"
        >
        </Reviews>
    </div>
</template>

<script>


    export default {
        props: [ 'rewww' ],
        name: 'AnnouncementReviews'
    }
</script>

<style lang="scss" scoped>
    .reviews__container {
        height: 300px;
        width: 300px;
        .author {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: flex-start;
            font-size: medium;
            font-weight: bold;
        }
    }

</style>
