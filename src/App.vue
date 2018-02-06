<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import './assets/style.css';
export default {
    name: "app"
};
</script>

<style>
.floor{
    padding: 4px 8px;
    margin-bottom: 1em;
}
.c{
    margin-left: -8px;
    margin-right: -8px;
    padding: .6em 1.2em;
    background-color: #eee;
    font-size: 16px;
    line-height: 1.5;
    color: #5f5f5f;
    /* font-family: Consolas,Source Code Pro,Courier New; */
    /* letter-spacing: .5px; */
}
.w{
    font-weight: 700;
}
.w:not(:first-child){
    margin-top: 1em;
}
.r{
    opacity: 0.8;
}
</style>


