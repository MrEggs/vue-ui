<template>
<div class="input">
    <input class="input-main"
    :value="baseValue"  :placeholder="holder"
    :onfocus="disable?'this.blur()':''"
    :class="[
        'input-main-'+soltPosition,
        {'input-disabled':disable},
    ]"
    />
    <i v-if="icon!=''" class="input-icon-base"
    :class="['input-icon-'+icon]"
    @click="e=>$emit('iconClick',e)"/>

    <div v-if="soltPosition != ''"
    class="input-solt-base"
    :class="[
        'input-solt-'+soltPosition,
    ]"
    >{{soltValue}}</div>
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
        },
        disable: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: ''
        },
        soltPosition: {
            type: String,
            default: '', //prepend
        },
        soltValue: {
            type: String,
            default: "Http://"
        }
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.input {
    display: flex;
    position: relative;
}

.input-main {
    width: 100%;
    height: 100%;
    border: 1px solid #bfcbd9;
    padding: 10px 0px 10px 10px;
    border-radius: 5px;
    box-sizing: border-box;
}

.input-main:hover {
    border: 1px solid rgba(191, 203, 217, 0.5);
}

.input-disabled {
    background: #eef1f6;
    cursor: url("http://ued.taobao.com/blog/wp-content/themes/taobaoued/images/cursor.ico"), auto;
}

.input-icon-base {
    width: 14px;
    height: 14px;
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -7px;
}

.input-icon-base:hover {
    cursor: pointer;
}

.input-icon-search {
    background: url("../../../assets/search.png") no-repeat 0 0;
    background-size: 14px 14px;
}

.input-solt-base {
    width: 15%;
    height: 100%;
    display: inline-block;
    position: absolute;
    line-height: 50px;
    text-align: center;
    color: #bfcbd9;
}

.input-solt-prepend {
    left: 0px;
    border-right: 1px solid #bfcbd9;
}

.input-solt-append {
    right: 0px;
    border-left: 1px solid #bfcbd9;
}

.input-main-prepend {
    padding-left: 18%;
}

.input-main-append {
    padding-right: 18%;
}
</style>
