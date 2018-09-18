<template>
    <div class="aboutUs-container">
        <div class="info-container">
            <div class="info publisher">
                {{publisher}}
            </div>
            <div class="info coops">
                {{coops}}
            </div>
            <div class="info invitation">
                {{invitation}}
            </div>
        </div>
    </div>
</template>

<script>
    let AboutUs = {
        props: [ 'publisher', 'coops', 'invitation' ],
        name: 'AboutUs',
        data() {
            return {}
        }
    };
    export default AboutUs;

</script>

<style scoped lang="scss">
    .aboutUs-container {
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;

        .info {
            text-align: justify;
            padding-top: 30px;
        }
    }

</style>
