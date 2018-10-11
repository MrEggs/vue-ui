<template>
<div>
    <input class="input"
    :value="baseValue"  :placeholder="holder"
    />
</div>
</template>

<script>
export default {
    props: {
        holder: {
            type: String,
            default: '请输入内容'
        },
        baseValue: {
            type: String,
            default: '',
        }
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid #bfcbd9;
    padding: 10px 0px 10px 10px;
    border-radius: 5px;
    box-sizing: border-box;
}

.input:hover {
    border: 1px solid rgba(191, 203, 217, 0.5);
}
</style>
