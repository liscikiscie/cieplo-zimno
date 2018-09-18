<template>
    <div class="item__container">
        <div class="cover__container" :style="{'backgroundImage': 'url('+ image +')'}"></div>
    </div>
</template>

<script>
    let BooksContent = {
        props: [ 'id', 'title', 'imgSrc', 'shortDesc', 'isbn', 'shops', 'revirews' ],
        data() {
            return {
                image: this.imgSrc
            }
        }
    };

    export default BooksContent;
</script>


<style lang="scss" scoped>

    .item__container {
        padding-top: 30px;
        display: flex;
        justify-content: space-around;

        .cover__container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 300px;
            width: 250px;
            padding: 0 30px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            cursor: pointer;
        }
    }
</style>