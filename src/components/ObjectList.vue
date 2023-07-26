<template>
    <div class="list__container">
        <h1 class="list__h1">Objects</h1>
        <ul class="list">
            <ObjectItem v-for=" object of   objects  " v-bind:object="object" />
        </ul>
    </div>
</template>

<script>
import ObjectItem from '../components/ObjectItem.vue'
export default {
    props: ["objects"],
    components: {
        ObjectItem
    }
}
</script>

<style>
.list__container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 40px;
    width: 80%;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 10px 30px 3px rgba(0 0 0 / 15%);
}

.list__h1 {
    margin: 0;

    color: #333;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
    padding: 0;
}
</style>
