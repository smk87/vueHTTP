<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.mail" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <hr />
        <ul class="list-grou">
          <li class="list-group-item" v-for="u in users">
            {{ u.username }} - {{ u.mail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        mail: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    submit() {
      //   this.$http.post("data.json", this.user).then(
      //     res => {
      //       console.log(res);
      //     },
      //     err => {
      //       console.log(err);
      //     }
      //   );
      this.resource.saveAlt({}, this.user);
    },
    fetchData() {
      this.$http
        .get("data.json")
        .then(res => res.json())
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            console.log(key, data);
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>

<style>
</style>
