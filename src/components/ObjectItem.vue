<template>
    <li v-bind:style="{ backgroundColor: object.color }" class="item">
        <div class="item__container">
            <div class="text__container">
                <span class="item__text">name : {{ object.name }}</span>
                <span class="item__text">value : {{ object.value }}</span>
            </div>
            <button class="item__button">
                <img class="item__icon" src="/list_icon.svg " alt="change icon">
            </button>
        </div>
        <form class="item__form">
            <button class="form__close">
                <img class="close__img" src="/cross.svg" />
            </button>
            <input class="form__input" type="text" value="Enter new value" />
            <button class="form__button" type="submit">Change</button>
        </form>
    </li>
</template>
<script>
export default {
    props: {
        object: {
            type: Object,
            required: true
        }
    }
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
    font-weight: 500;
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
}


.item__icon {
    height: 35px;
    transition: all 0.1s linear;
}

.item__button:is(:hover, :focus) .item__icon {
    transform: rotate(-90deg);
}

.item__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;

    padding: 30px;
    gap: 20px;

    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 30px 3px rgba(0, 0, 0, 0.15);
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
    font-weight: 400;
    line-height: 150.5%;
}

.form__input:focus {
    border: 1px solid #DDD;
    color: #333;
}

.form__close {
    background-color: transparent;
    border: none;
    appearance: none;
}

.form__button {
    width: 323px;
    height: 46px;
    border-radius: 5px;
    background: #F5F5F5;
    border: none;

    color: #333;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150.5%;
}
</style>
