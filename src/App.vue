<template>
<div id="app">
    <div class="head-bar">
        <img class="head-bar-logo" src="./assets/logo.png"/>
        <span class="head-bar-title">MrEgg 的 UI库</span>
        <div class="head-bar-name">
            Made By Lin
        </div>
    </div>
    <div class="main-content">
        <div class="left-nav">
            <ul class="nav-ul">
                <li class="nav-title">
                    组件
                </li>
                <li class="nav-ol">
                    <router-link to='button' tag="span">Button</router-link>
                </li>
                <li class="nav-ol">
                    <router-link to='input' tag="span">Input</router-link>
                </li>
                <li class="nav-ol">
                    <router-link to='checkbox' tag="span">Checkbox</router-link>
                </li>
                <li class="nav-ol">
                    <router-link to='radio' tag="span">Radio</router-link>
                </li>
                <li class="nav-ol">
                    <router-link to='inputnumber' tag="span">InputNumber</router-link>
                </li>
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

.head-bar-title {
    color: black;
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
    list-style: none;
    text-align: left;
}

.nav-title {
    font-weight: 700;
    font-size: 16px;
    color: #333;
    line-height: 40px;
}

.nav-ol {
    margin: 0px;
    padding: 8px 24px;
    font-weight: 400;
    font-size: 14px;
    color: #444;
    cursor: pointer;
}
</style>
