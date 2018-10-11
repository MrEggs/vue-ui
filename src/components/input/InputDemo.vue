<template>
<div>
    <div class="btn-line">
        <section>
            <h1>Input 输入框</h1>
            <hr />
            <span>
                基础用法
                </span><br/>
            <span>
                使用type、plain和round属性来定义 Button 的样式。
            </span>
        </section>
        <div class="btn-demo-show-column">
            <div class="btn-demo-show-line ">
                <EInput class="btn-line-item" />
            </div>
        </div>
        <section>
            <span>
               禁用输入框
            </span>
        </section>
        <div class="btn-demo-show-column">
            <div class="btn-demo-show-line ">
                <EInput class="btn-line-item" :disable=true />
            </div>
        </div>
        <section>
            <span>
              带图标的输入框
            </span>
        </section>
        <div class="btn-demo-show-column">
            <div class="btn-demo-show-line ">
                <EInput class="btn-line-item" :icon="'search'" @iconClick="alerts" />
            </div>
        </div>
        <section>
            <span>
              带头部/尾部的输入框
            </span>
        </section>
        <div class="btn-demo-show-column">
            <EInput class="btn-line-item" :soltPosition="'prepend'" :icon="'search'" /><br>
            <EInput class="btn-line-item" :soltPosition="'append'" :soltValue="'.com'" />
        </div>
    </div>
</div>
</template>

<script>
import EInput from "@/components/input/components/Input";

export default {
    components: {
        EInput
    },
    data() {
        return {};
    },
    methods: {
        alerts() {
            alert("hello world");
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

.btn-demo-show-column {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #e2ecf4;
}

.btn-demo-show-row {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: 1px solid #e2ecf4;
}

.btn-demo-show-line {
    display: flex;
    flex-direction: row;
}
</style>
