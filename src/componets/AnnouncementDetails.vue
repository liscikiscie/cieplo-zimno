<template>
    <div :id="id" class="book-details__container">
        <div class="header__container">
            <div class="cover">
                <div class="header-cover" :style="{'backgroundImage': 'url('+ image +')'}"/>
                <div class="isbn">
                    <div class="isbn-detail">Oprawa: {{$route.params.isbn.bookBinding}}</div>
                    <div class="isbn-detail">Wydanie: {{$route.params.isbn.bookEdition}}</div>
                    <div class="isbn-detail">Format: {{$route.params.isbn.bookFormat}}</div>
                    <div class="isbn-detail">Cena okładkowa: {{$route.params.isbn.coverPrize}}</div>
                    <div class="isbn-detail">ISBN: {{$route.params.isbn.isbn}}</div>
                    <div class="isbn-detail">Ilość stron: {{$route.params.isbn.numberOfPages}}</div>
                </div>
                <hr style="width: 70%"/>
                <div class="shops">
                    <a class="shop" :href="$route.params.shops.shop1" target="_blank">Empik</a>
                    <a class="shop" :href="$route.params.shops.shop2" target="_blank">Lobotiga</a>
                    <a class="shop" :href="$route.params.shops.shop3" target="_blank">Merlin</a>
                </div>
            </div>
            <div class="header-main-info">
                <div class="header-info title">
                    {{title}}
                </div>
                <div class="header-info author">
                    {{author}}
                </div>
                <div class="book__description">
                    {{shortDesc}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // import AnnouncementReviews from './AnnouncementReviews.vue'
    import AnnouncementIsbn from './AnnouncementIsbn.vue'

    let AnnouncementDetails = {
        props: [ 'id', 'title', 'author', 'imgSrc', 'shortDesc', 'isbn', 'shops', 'reviews' ],
        name: 'announcementDetails',
        components: { AnnouncementIsbn },
        data() {
            return {
                image: this.imgSrc
            }
        }
    };

    export default AnnouncementDetails;
</script>

<style lang="scss" scoped>

    .book-details__container {

        .header__container {
            margin-top: 60px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: nowrap;

            @media (max-width: 600px) {
                flex-direction: column;
            }


            .cover {

                width: 300px;
                display: flex;
                flex-direction: column;

                .header-cover {
                    display: flex;
                    width: 100%;
                    height: 300px;
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position: center center;

                    @media (max-width: 992px) {
                        width: 220px;
                        height: 270px;
                    }
                }
                .isbn {
                    width: 100%;
                    margin: 30px 0 0 40px;

                    @media (max-width: 992px) {
                        font-size: 80%;
                    }

                    .isbn-detail {
                        display: flex;
                        text-align: left;
                        justify-content: flex-start;
                        padding-bottom: 10px;
                    }
                }
                .shops {
                    display: flex;
                    justify-content: space-around;

                    @media (max-width: 992px) {
                        font-size: 80%;
                    }
                }
            }
            .header-main-info {
                width: 70%;
                height: auto;
                display: inline-flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: flex-start;

                @media (max-width: 992px) {
                    width: 100%;
                }

                .header-info {
                    display: flex;
                    justify-content: flex-start;
                    padding: 30px 0 20px 0;

                    @media (max-width: 992px) {
                        padding: 15px 0 10px 0;
                    }
                }
                .title {
                    font-size: 22px;
                    font-weight: bold;

                    @media (max-width: 992px) {
                        font-size: 80%;
                    }
                }

                .author {
                    font-size: 22px;
                    font-weight: bold;

                    @media (max-width: 992px) {
                        font-size: 80%;
                    }
                }
            }
            .book__description {
                width: auto;
                height: 150px;
                text-align: justify;
                text-indent: 50px;
                margin-top: 60px;
                word-spacing: 3px;
                font-size: 18px;

                @media (max-width: 992px) {
                    height: 80px;
                    font-size: 80%;
                    margin-top: 15px;
                    text-indent: 20px;
                }
            }

            .reviews {
                .review {
                    width: 100%;
                    height: auto;
                    margin: 30px 0;

                    .author {
                        display: flex;
                        justify-content: flex-start;
                        padding-bottom: 15px;
                        font-size: 20px;
                        font-weight: bold;

                        @media (max-width: 992px) {
                            font-size: 80%;
                        }
                    }

                    .text {
                        display: flex;
                        text-align: justify;
                        word-spacing: 3px;
                        font-size: 18px;

                        @media (max-width: 992px) {
                            font-size: 80%;
                        }
                    }
                }
            }
        }
    }

</style>

