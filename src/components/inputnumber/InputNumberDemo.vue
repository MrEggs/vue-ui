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
        <span>
            全部禁用 与 输入框禁用
        </span>
    </section>
    <div class="btn-demo-show-row">
        <InputNumber v-model="defaultValue" :disable=true />
        <InputNumber v-model="defaultValue" :writeable=false />
    </div>
    <section>
        <span>
            步数
        </span>
    </section>
    <div class="btn-demo-show-row">
        <InputNumber v-model="defaultValue" :step="5" />
    </div>
    <section>
        <span>
            精度
        </span>
    </section>
    <div class="btn-demo-show-row">
        <InputNumber class="btn-demo-show-item" v-model="defaultValue" :precision=1 :step="0.1" />
        <InputNumber v-model="defaultValue" :precision=2 :step="0.01" />
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
            test: 1,
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

.btn-demo-show-item {
    margin: 0px 20px 0px 0px;
}

.btn-demo-item {}
</style>
