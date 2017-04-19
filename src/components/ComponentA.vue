<template>
    <input id="ca" type="text" v-model="localvarA" placeholder="localvarA">
    <label>{{localvarA}}</label>
    <div>
        thisdiv
        {{sharedvar}}
    </div>
</template>


<script>
    import remoteservice from '../services/applications'
    export default {
        data: function () {
            return {
                localvarA: 'localvalA',
                sharedvar: remoteservice.sharedvar
            }
        }
    }
</script>