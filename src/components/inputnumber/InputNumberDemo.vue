<template>
<div class="btn-line">
    <section>
        <h1>InputNumber 单选/多选框</h1>
        <hr />
        <span>
                基础用法
                </span><br/>
        <span>
                使用type、plain和round属性来定义 Button 的样式。
            </span>
    </section>
    <div class="btn-demo-show-row">
        <InputNumber v-model="defaultValue" />
    </div>
    <section>
        <span>
            禁用状态
        </span>
    </section>
    <div class="btn-demo-show-row">
    </div>
    <section>
        <span>
            按钮组/多选
        </span>
    </section>
    <div class="btn-demo-show-row">
    </div>
    <section>
        <span>
            按钮组/单选
        </span>
    </section>
    <div class="btn-demo-show-row">
    </div>
</div>
</template>

<script>
import InputNumber from "@/components/inputnumber/components/InputNumber";

export default {
    components: {
        InputNumber,
    },
    data() {
        return {
            defaultValue: 10,
        };
    },
    methods: {
        alerts() {
            alert("hello world");
        },
    },
    computed: {}
}
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

.btn-demo-show-row {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: 1px solid #e2ecf4;
}

.btn-demo-item {}
</style>
