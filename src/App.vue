<template>
<div id="app">
    <div class="head-bar">
        <img class="head-bar-logo" src="./assets/logo.png"/>
        <div class="head-bar-name">
            Made By Lin
        </div>
    </div>
    <div class="main-content">
        <div class="left-nav">
            <ul class="nav-ul">
                <ol class="nav-ol">
                    <router-link to='button'>Button</router-link>
                </ol>
                <ol class="nav-ol">
                    <router-link to='input'>Input</router-link>
                </ol>
                <ol class="nav-ol">
                    <router-link to='checkbox'>Checkbox</router-link>
                </ol>
                <ol class="nav-ol">4</ol>
            </ul>
        </div>
        <router-view class="main-view" />
    </div>

</div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
body {
    margin: 0px;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3f536e;
    background-color: #ffffff;
    height: 100vh;
    width: 100wh;
    margin: 0px;
    padding: 0px;
}

.head-bar {
    width: 100wh;
    height: 9vh;
    display: flex;
    padding: 10px;
    align-items: center;
}

.head-bar-logo {
    height: 70%;
    margin-left: 40px;
}

.head-bar-name {
    position: absolute;
    right: 40px;
}

.main-content {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.left-nav {
    flex: 1;
}

.main-view {
    flex: 4;
}

.nav-ul {
    margin: 0px;
    padding: 8px 24px;
}

.nav-ol {
    margin: 0px;
    padding: 8px 24px;
}
</style>
