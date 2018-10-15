<template>
<div class="input-number">
    <div class="input-number-option input-number-option-deduct" @click="deductCount">-</div>
    <div class="input-number-main">
        <input class="input-number-main-number" type="tel" :value="value" @input="$emit('input', $event.target.value)" />
    </div>
        <div class="input-number-option input-number-option-add" @click="addCount">+</div>
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
        }
    },
    data() {
        return {
        }
    },
    methods: {
        deductCount() {
            $emit('input', --this.value);
        },
        addCount() {
            $emit('input', ++this.value);
        },
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
</style>
