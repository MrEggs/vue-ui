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
        <Select  />
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
    </div>
    <section>
        <span>
            步数
        </span>
    </section>
    <div class="btn-demo-show-row">
    </div>
    <section>
        <span>
            精度
        </span>
    </section>
    <div class="btn-demo-show-row">
    </div>
</div>
</template>

<script>
import Select from "@/components/select/components/Select";

export default {
    components: {
        Select,
    },
    data() {
        return {};
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
