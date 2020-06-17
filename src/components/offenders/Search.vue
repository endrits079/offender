<template>
  <div class="search-section">
    <h1>Search Offender</h1>
    <form @submit="search">
      <div class="search-input">
        <font-awesome class="search-icon" icon="search"></font-awesome>
        <input @input="searchInput" type="search" placeholder="Search Offender" id="search" />
      </div>
    </form>
    <table v-if="offenders.length>0">
      <thead>
        <tr>
          <th>Offender</th>
          <th>Personal Number</th>
          <th>Birthdate</th>
          <th>Nationality</th>
          <th>Address</th>
          <th>Offenses Number</th>
          <th>Restitution Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="offender of offenders" v-bind:key="offender.Offender_ODB">
          <td>{{ offender.Offender_ODB }}</td>
          <td>{{ offender.PersonalNumber_ODB }}</td>
          <td>{{ offender.BirthDate_ODB }}</td>
          <td>{{ offender.Nationality_ODB }}</td>
          <td>{{ offender.Address_ODB }}</td>
          <td>{{ offender.OffensesNumber_ODB }}</td>
          <td>{{ offender.RestitutionActive_ODB }}</td>
          <td>
            <router-link :to="{path:'update',query:{id:offender.ID_Offender_ODB}}">Update</router-link>
            <button
              @click="deleteOffender(offender.ID_Offender_ODB)"
              style="background-color:rgb(150,40,40);"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else-if="searched && offenders.length===0" style="color:red;">No data found</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offenders: [],
      searchValue: null,
      searched: false
    };
  },
  created() {
    this.getAllOffenders();
  },
  methods: {
    search(e) {
      e.preventDefault();
      this.$http
        .get("http://slimapp/api/offender/" + this.searchValue)
        .then(data => {
          this.offenders = [];
          this.searched = true;
          if (data.body !== "false") {
            this.offenders.push(data.body);
          }
        });
    },
    getAllOffenders() {
      this.$http.get("http://slimapp/api/offenders").then(data => {
        this.offenders = data.body;
      });
    },
    searchInput(e) {
      this.searchValue = e.target.value;
      if (this.searchValue.length === 0) {
        this.searched = false;
        this.getAllOffenders();
      }
    },
    deleteOffender(id) {
      if (confirm("Are you sure you want to delete?"))
        this.$http
          .delete("http://slimapp/api/offender/delete/" + id)
          .then(() => {
            this.offenders = this.offenders.filter(
              offnd => offnd.ID_Offender_ODB !== id
            );
            alert("Offender deleted successfully");
          });
    }
  }
};
</script>

<style>
body {
  font-family: "Open-Sans";
}
.search-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-section h1 {
  margin-bottom: 25px;
  color: var(--mainBG);
}
.search-section form {
  width: 60%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.search-section form input[type="search"] {
  border: none;
  outline: none;
  min-height: 100%;
  border-radius: 100px;
  width: 100%;
  padding-left: 40px;
}
.search-input {
  border: 2px solid var(--mainBG);
  border-radius: 100px;
  padding: 0;
  margin: 0;
  height: 30px;
  position: relative;
  width: 60%;
}
.search-input .search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  padding: 2px;
  color: #dd6f00;
}
.search-section table,
.search-section tr,
.search-section td,
.search-section th {
  border: 0.3px solid rgb(94, 93, 91);
  border-collapse: collapse;
}
.search-section table {
  width: 95%;
  overflow: auto;
}
.search-section td {
  text-align: center;
  background-color: rgb(253, 208, 124);
  padding: 10px 0;
}
.search-section th {
  height: 50px;
  background-color: var(--mainBG);
  color: white;
}
.search-section table a {
  padding: 10px 30px;
  background-color: green;
  text-decoration: none;
  color: white;
  display: inline-block;

  /* margin: 5px 0; */
}
.search-section table button {
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  /* font-family: "Open Sans"; */
}
</style>
