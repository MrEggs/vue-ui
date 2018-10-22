<template>
<div class="select">
    <div class="select-input" >
        <input class="select-main" placeholder="请选择" v-model="showValue"/>
        <span class="select-main-icon" @click="showDropdown"
        :style="{'transform': 'rotate3d(0, 0, 1, '+rotateNum+'deg)'}"></span>
    </div>
    <ul class="select-dropdown" :class="[
        {'select-dropdown-show':dropdownShow},
        ]" @click="selectValue">
        <li class="select-dropdown-item">1</li>
        <li class="select-dropdown-item">2</li>
        <li class="select-dropdown-item">3</li>
        <li class="select-dropdown-item">4</li>
    </ul>
</div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            rotateNum: 45,
            dropdownShow: false,
            showValue: '',
            width: 0,
        }
    },
    methods: {
        showDropdown() {
            if (this.rotateNum == 45) {
                this.rotateTop();
            } else {
                this.rotateBottom();
            }
            this.dropdownShow = !this.dropdownShow;
        },
        selectValue(e) {
            this.showValue = e.target.innerHTML;
            this.showDropdown();
        },
        rotateTop() {
            setTimeout(() => {
                this.rotateNum += 15;
                if (this.rotateNum != 225) {
                    this.rotateTop();
                }
            }, 10)
        },
        rotateBottom() {
            setTimeout(() => {
                this.rotateNum -= 15;
                if (this.rotateNum != 45) {
                    this.rotateBottom();
                }
            }, 10)
        }
    }
}
</script>

<style scoped>
.select {
    display: inline-block;
    clear: both;
    position: relative;
}

.select-input {
    height: 100%;
    border: 1px solid #c0c4cc;
    border-radius: 4px;
    padding: 0px 20px 0px 10px;
    height: 40px;
    width: 200px;
    display: flex;
    flex-direction: row;
    position: relative;
}

.select-main {
    border: none;
    height: 100%;
    padding: 0px;
    margin: 0px;
    outline: none;
    box-sizing: border-box;
}

.select-main-icon {
    position: absolute;
    width: 36px;
    height: 100%;
    right: 0;
    top: 0;
    text-align: center;
    color: #bfcbd9;
    line-height: 36px;
    font-size: 14px;
    display: block;
    cursor: pointer;
}

.select-main-icon::before {
    width: 10px;
    height: 10px;
    border: 1px solid #c0c4cc;
    border-left: 0px;
    border-top: 0px;
    color: #c0c4cc;
    content: " ";
    display: block;
    left: 12px;
    top: 12px;
    position: relative;
    transform-origin: 1px 1px;
    cursor: pointer;
}

.select-dropdown {
    border: 1px solid #e4e7ed;
    list-style: none;
    border-radius: 2px;
    display: none;
    position: absolute;
    min-width: 100px;
    background: #fff;
    padding: 5px 10px;
}

.select-dropdown-show {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
}

.select-dropdown-item {
    background: #fff;
    padding: 5px 10px;
}

.select-dropdown-item:hover {
    background: #f5f7fa;
    cursor: pointer;
}
</style>
