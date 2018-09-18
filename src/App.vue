<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Książki</router-link>
            |
            <router-link to="/zapowiedzi">Zapowiedzi</router-link>
            |
            <router-link to="/onas">O nas</router-link>
            |
            <router-link to="/kontakt">Kontakt</router-link>
        </div>
        <hr>
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        display: flex;
        justify-content: space-around;
        padding: 30px;

        a {
            text-decoration: none;
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
