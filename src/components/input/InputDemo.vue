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
        <div class="btn-demo-show-column">
            <div class="btn-demo-show-line ">
                <EInput class="btn-line-item" />
            </div>
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
    methods: {},
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
