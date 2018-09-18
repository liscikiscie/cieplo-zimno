<template>
    <div class="books__routing-container">
        <router-link
                :to="{
                name:'announcementDetails',
                params:{
                announcementDetails: title,
                id: id,
                title: title,
                author: author,
                imgSrc: imgSrc,
                isbn: isbn,
                shortDesc:shortDesc,
                shops: shops,
                reviews:reviews
                }}"
        >
            <div class="cover__container" :style="{'backgroundImage': 'url('+ image +')'}"></div>
        </router-link>
    </div>
</template>

<script>
    let AnnouncementRout = {
        name: 'announcementRout',
        props: [ 'id', 'title', 'author', 'imgSrc', 'shortDesc', 'isbn', 'shops', 'reviews' ],
        data() {
            return {
                image: this.imgSrc
            }
        }
    };
     export default AnnouncementRout;
</script>

<style lang="scss" scoped>

    .books__routing-container {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 30%;
        padding: 30px 0;

        .cover__container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            height: 300px;
            width: 250px;
            padding: 0 30px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            cursor: pointer;

            @media (max-width: 992px) {
                width: 220px;
                height: 270px;
            }
            @media (max-width: 755px) {
                height: 190px;
                width: 240px;
            }
            @media (max-width: 530px) {
                height: 140px;
                width: 170px;
            }

        }
    }

</style>
