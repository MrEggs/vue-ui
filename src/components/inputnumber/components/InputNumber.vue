<template>
<div class="input-number">
    <div class="input-number-option input-number-option-deduct" :class="[{'input-disable':disable}]" @click="deductCount" :onfocus="disable?'this.blur()':''">-</div>
    <div class="input-number-main" :class="[{'input-disable':disable},]">
        <input
        class="input-number-main-number"
        :class="[{'input-disable':disable},]"
        type="tel"
        :value="getValue"
        @input="$emit('input', $event.target.value)"
        :onfocus="disable||!writeable?'this.blur()':''"
        />
    </div>
        <div class="input-number-option input-number-option-add" :class="[
        {'input-disable':disable},
        ]" @click="addCount" :onfocus="disable?'this.blur()':''">+</div>
    </div>
</template>

<script>
export default {
    props: {
        value: {

        },
        step: {
            type: Number,
            default: 1,
        },
        defaultValue: {
            type: Number,
            default: 0
        },
        disable: {
            type: Boolean,
            default: false
        },
        writeable: {
            type: Boolean,
            default: true
        },
        precision: {
            type: Number,
            default: 0,
        }
    },
    created() {
        this.basePrecision = Math.pow(10, this.precision);
    },
    data() {
        return {
            basePrecision: 1,
        }
    },
    methods: {
        deductCount() {
            if (this.disable) {
                return;
            }
            this.$emit('input', ((this.value * this.basePrecision - this.step * this.basePrecision) / this.basePrecision).toFixed(this.precision));
        },
        addCount() {
            if (this.disable) {
                return;
            }
            this.$emit('input', ((this.value * this.basePrecision + this.step * this.basePrecision) / this.basePrecision).toFixed(this.precision));
        },
        onInput(e) {
            console.log(e);
            return false;
        },
    },
    computed: {
        getValue() {
            return this.value;
        }
    }
}
</script>

<style scoped>
.input-number {
    display: flex;
    flex-direction: row;
    width: 180px;
    height: 40px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    z-index: 1;
    user-select: none;
}

.input-number-option {
    width: 40px;
    text-align: center;
    cursor: pointer;
}

.input-number-option-deduct {
    border-right: 1px solid #dcdfe6;
}

.input-number-option-add {
    border-left: 1px solid #dcdfe6;
}

.input-number-main {}

.input-number-main-number {
    width: 100px;
    height: 38px;
    border: none;
    padding: 0px;
    text-align: center;
}

.input-disable {
    background: #f5f7fa;
    color: #c0c4cc;
}
</style>
