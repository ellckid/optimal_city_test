<template>
    <li v-bind:style="{ backgroundColor: object.color }" class="item">
        <div class="item__container">
            <div class="text__container">
                <span class="item__text">name : {{ object.name }}</span>
                <span class="item__text">value : {{ object.value }}</span>
            </div>
            <button class="item__button" @click="openForm(object.name)">
                <img class="item__icon" src="/list_icon.svg " alt="change icon">
            </button>
        </div>
        <form class="item__form" v-bind:id="object.name" @submit.prevent="$emit('change-value', object.name, this.input)">
            <button class="form__close" @click="openForm(object.name)">
                <img class="close__img" src="/cross.svg" />
            </button>
            <input class="form__input" type="text" v-model="input" />
            <button class="form__button" type="submit">Change</button>
        </form>
    </li>
</template>
<script >
export default {
    props: {
        object: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            input: 'Enter new value'
        }
    },

}

</script>
<script setup>
function openForm(id) {
    document.getElementById(id).classList.toggle('form__open')
}

</script>
<style >
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 20px 40px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0 0 0 /25%) inset;

    transition: background-color 0.5s linear;

}

.item__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.text__container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item__text {
    color: #333;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.item__text:last-child {
    font-size: 24px;
}

.item__button {
    cursor: pointer;
    border: none;
    appearance: none;
    background-color: transparent;
    z-index: 1;
}

.item__icon {
    height: 35px;
    transition: all 0.1s linear;
    z-index: 0;
}

.item__button:is(:hover, :focus) .item__icon {
    transform: rotate(-90deg);
}

.item__form {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;

    padding: 30px;
    gap: 20px;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 30px 3px rgba(0, 0, 0, 0.15);

    transition: all 0.5s linear;
}

.form__open {
    display: flex;
}

.form__input {
    width: 291px;
    height: 150px;
    display: flex;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #DDD;
    background: #FFF;

    color: #DDD;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150.5%;
}

.form__input:focus {
    border: 1px solid #DDD;
    color: #333;
}

.form__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    appearance: none;
}

.close__img {
    opacity: 60%;
    transition: all 0.1s linear;
}

.form__close:is(:hover, :focus) .close__img {
    opacity: 100%;
}

.form__button {
    cursor: pointer;
    width: 323px;
    height: 50px;

    border-radius: 15px;
    background: rgba(228 228 228 / 70%);
    border: none;

    color: #333;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150.5%;
}

.form__button:is(:hover, :focus) {
    background: rgb(222, 222, 222);
}
</style>
