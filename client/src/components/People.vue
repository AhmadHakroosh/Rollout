<template>
  <div class="people">
    <p v-if="empty">
      Hello there, you have no people yet, add some if you like
    </p>
    <table class="people-list">
      <tr>
        <td>
          <input
            type="text"
            placeholder="First + Last name"
            v-model="fullname"
          />
        </td>
        <td><button @click="add" :disabled="!clickable">Add</button></td>
      </tr>
      <Person
        v-for="person in people"
        :key="person._id"
        :who="person"
        @remove="remove"
        @update="update"
      />
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
  private people: IPerson[] = [];
  private fullname: String = "";

  constructor() {
    super();
    this.get();
  }

  get clickable(): boolean {
    return (
      this.fullname !== "" && (this.fullname.match(/\w+/g) || []).length >= 2
    );
  }

  get empty(): boolean {
    return this.people.length === 0;
  }

  get() {
    this.$http.get("people").then(({ data }: { data: IPerson[] }) => {
      this.people = data;
    });
  }

  add() {
    let [firstname, lastname] = this.fullname.match(/\w+/g) || [null, null];
    this.$http
      .post("people", {
        firstname: firstname,
        lastname: lastname
      })
      .then(({ data }: { data: IPerson }) => {
        this.people.push(data);
        this.fullname = "";
      });
  }

  remove(id: String): void {
    this.$http.delete(`people/${id}`).then(({ data }: { data: IPerson }) => {
      const position = this.people.findIndex(
        (person: IPerson): boolean => person._id === data._id
      );
      if (position !== -1) {
        this.people.splice(position, 1);
      }
    });
  }

  update(person: IPerson): void {
    const current = this.people.find(
      (someone: IPerson): boolean => someone._id === person._id
    );
    if (current && JSON.stringify(current) !== JSON.stringify(person)) {
      this.$http
        .patch(`people/${person._id}`, {
          firstname: person.firstname,
          lastname: person.lastname
        })
        .then(({ data }: { data: IPerson }) => {
          const position = this.people.findIndex(
            (person: IPerson): boolean => person._id === data._id
          );
          this.people.splice(position, 1, data);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.people-list {
  margin: auto;
}
</style>
