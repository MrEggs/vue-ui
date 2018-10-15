<template>
<label class="check-box" >
    <span class="check-box-select">
        <span class="check-box-select-check" 
        :class="[
            {'check-box-select-checked':isChecked},
            {'check-box-disable-check ':disable},
            {'check-box-disable-checked ':disable&&isChecked}
        ]"></span>
        <input class="check-box-select-checkbox" type="checkbox" 
        :value="isChecked" @click="setCheckedState" :cvalue=value :ekey="ekey"/>
    </span>
    <span class="check-box-value"
    :class="[
        {'check-box-disable-text':disable}
    ]"
    >{{value}}</span>
</label>
</template>

<script>
export default {
    props: {
        disable: {
            type: Boolean,
            default: false,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: ''
        },
        ekey: {
            type: Number,
            default: 0,
        },
        withParent: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {

    },
    data() {
        return {
            isChecked: this.checked,
        };
    },
    methods: {
        alertHello() {
            alert("hello checkbox");
        },
        setCheckedState(e) {
            if (this.withParent || this.disable) {
                return;
            }
            this.isChecked = !this.isChecked;
            this.$emit('stateChange', this.isChecked);
        },

        //向外暴露的方法 用于设置选中状态
        changeCheckedState(state) {
            this.isChecked = state;
        },
        //向外暴露的方法 用于获取选中状态
        popUpCheckedState() {
            return this.isChecked;
        }
    },
    computed: {}
}
</script>

<style scoped>
.check-box {
    display: flex;
    flex-direction: row;
    line-height: 20px;
    position: relative;
    margin: 5px;
    box-sizing: border-box;
    cursor: pointer;
}

.check-box-select {}

.check-box-select-check {
    width: 18px;
    height: 18px;
    display: inline-block;
    position: relative;
    border: 1px solid #409eff;
    border-radius: 4px;
    background-color: #fff;
    z-index: 1;
}

.check-box-select-checked {
    background: #409eff;
}

.check-box-select-checked::after {
    width: 4px;
    height: 8px;
    position: absolute;
    left: 6px;
    top: 3px;
    box-sizing: content-box;
    content: '';
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    transform-origin: center;
}

.check-box-select-check::after {
    transform: rotate3d(0, 0, 1, 45deg);
}

.check-box-select-checkbox {
    display: none;
}

.check-box-value {
    margin-left: 5px;
}

.check-box-disable-text {
    color: #cabbbb;
}

.check-box-disable-check {
    background: #eef1f6;
    border: 1px solid #d1dbe5;
}

.check-box-disable-checked {
    background: #d1dbe5;
}
</style>
