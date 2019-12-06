<template>
    <div class="people">
        <table class="people-list">
            <Person v-for="person in people" :key="person._id" :who="person" />
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Person from "./Person.vue";
import { IPerson } from "../interfaces/person.interface";

@Component({
    components: { Person }
})
export default class People extends Vue {
    people: Object[] = [];

    constructor() {
        super();
        this.getPeople();
    }

    getPeople() {
        this.$http.get("/people").then(({ data }: { data: IPerson[] }) => {
            this.people = data;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
