<template>
<div>
    <div class="btn-line">
        <section>
            <h1>Button 按钮</h1>
            <hr />
            <span>
                基础用法
                </span><br/>
            <span>
                使用type、plain和round属性来定义 Button 的样式。
            </span>
        </section>
        <div class="btn-demo-show">
            <EButton @click="alert" :color="'primary'" :btnShow="'primary'" class="btn-line-item">primary</EButton>
            <EButton @click="alert" :color="'secondary'" :btnShow="'secondary'" class="btn-line-item">secondary</EButton>
            <EButton @click="alert" :color="'success'" :btnShow="'success'" class="btn-line-item">success</EButton>
            <EButton @click="alert" :color="'warning'" :btnShow="'warning'" class="btn-line-item">warning</EButton>
            <EButton @click="alert" :color="'info'" :btnShow="'info'" class="btn-line-item">info</EButton>
            <EButton @click="alert" :color="'error'" :btnShow="'error'" class="btn-line-item">error</EButton>
        </div>
        <section>
            <span>
                禁用状态
            </span>
        </section>
        <div class="btn-demo-show">
            <EButton @click="alert" :color="'primary'" :btnShow="'primary'" class="btn-common-item">未禁用</EButton>
            <EButton @click="alert" :color="'primary'" :eDisable=true :btnShow="'primary'" class="btn-common-item">禁用</EButton>
        </div>
        <section>
            <span>
                图标
            </span>
        </section>
        <div class="btn-demo-show">
            <EButton @click="alert" :color="'primary'" :btnShow="'primary'" :icon="icon" class="btn-common-item">带图标</EButton>
        </div>
        <section>
            <span>
                加载中
            </span>
        </section>
        <div class="btn-demo-show">
            <EButton @click="alert" :color="'primary'" :btnShow="'primary'" :loading=true class="btn-common-item">带图标</EButton>
        </div>
    </div>
</div>
</template>

<script>
import EButton from "@/components/button/components/Button";

export default {
    components: {
        EButton
    },
    data() {
        return {
            btnShow: "222",
            color: "primary",
            icon: require("../../assets/language.png"),
        };
    },
    methods: {
        alert(e) {
            alert("Hello World");
            console.log(e);
        }
    },
    computed: {}
};
</script>

<style scoped>
.btn-line {
    display: block;
    flex-direction: row;
    height: 50px;
    text-align: left;
    line-height: 35px;
    font-size: 15px;
}

.btn-line-item {
    flex: 1;
    height: 50px;
    margin: 5px;
    display: inline-block;
}

.btn-common-item {
    width: 5%;
    height: 50px;
    margin: 5px;
    display: inline-block;
}

.btn-title {
    text-align: left;
}

.btn-demo-show {
    display: flex;
    padding: 20px;
    border: 1px solid #e2ecf4;
}
</style>
