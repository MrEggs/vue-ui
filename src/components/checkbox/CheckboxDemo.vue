<template>
<div class="btn-line">
    <section>
        <h1>CheckBox 单选/多选框</h1>
        <hr />
        <span>
                基础用法
                </span><br/>
        <span>
                使用type、plain和round属性来定义 Button 的样式。
            </span>
    </section>
    <div class="btn-demo-show-column">
        <ECheckbox />
    </div>
    <section>
        <span>
            禁用状态
        </span>
    </section>
    <div class="btn-demo-show-column">
        <ECheckbox :disable=true />
    </div>
</div>
</template>

<script>
import ECheckbox from "@/components/checkbox/components/Checkbox";

export default {
    components: {
        ECheckbox
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

.btn-demo-show-column {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #e2ecf4;
}
</style>
