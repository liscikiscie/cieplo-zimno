<template>
    <div class="about-container">
        <AboutUs
                v-for="information in informations"
                :key="information.id"
                :publisher="information.publisher"
                :coops="information.coops"
                :invitation="information.invitation">
        </AboutUs>
    </div>
</template>

<script>
    import AboutUsInfo from '../assets/AboutUs';
    import AboutUs from '../componets/AboutUs.vue';

    let About = {
        name: 'About',
        components: {
            AboutUs
        },
        data() {
            return {
                informations: AboutUsInfo
            }
        }
    };
    export default About;
</script>

<style scoped lang="scss">
    .about-container {
        margin: 0 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

</style>
