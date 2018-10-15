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
    <div class="btn-demo-show-row">
        <ERadio class="btn-demo-item" :checked=unchecked :value="'未选中'" @stateChange="checkedChange" />
        <ERadio class="btn-demo-item" :checked=true :value="'选中'" />
    </div>
    <section>
        <span>
            禁用状态
        </span>
    </section>
    <div class="btn-demo-show-row">
        <ERadio class="btn-demo-item" :disable=true :checked=false :value="'未选中'" @stateChange="checkedChange" />
        <ERadio class="btn-demo-item" :disable=true :checked=true :value="'选中'" />
    </div>
    <section>
        <span>
            按钮组/多选
        </span>
    </section>
    <div class="btn-demo-show-row">
        <ERadioGroup :checkValues=checkedGroup @change="selectCheckbox" />
    </div>
    <section>
        <span>
            按钮组/单选
        </span>
    </section>
    <div class="btn-demo-show-row">
        <ERadioGroup :checkValues=checkedGroup :singleSelect=true @change="selectCheckbox" />
    </div>
</div>
</template>

<script>
import ERadio from "@/components/radio/components/Radio";
import ERadioGroup from "@/components/radio/components/RadioGroup";

export default {
    components: {
        ERadio,
        ERadioGroup,
    },
    data() {
        return {
            checked: true,
            unchecked: false,
            checkedGroup: [{
                    value: '选择1',
                    checked: true
                },
                {
                    value: '选择2',
                    checked: false
                },
                {
                    value: '选择3',
                    checked: false
                },
                {
                    value: '选择4',
                    checked: false
                },
            ]
        };
    },
    methods: {
        alerts() {
            alert("hello world");
        },
        checkedChange(state) {
            this.unchecked = state;
            console.log(this.unchecked);
        },
        selectCheckbox(selectItem) {
            console.log(selectItem);
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

.btn-demo-show-row {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: 1px solid #e2ecf4;
}

.btn-demo-item {}
</style>
