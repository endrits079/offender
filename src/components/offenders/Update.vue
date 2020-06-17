<template>
  <div class="add-offender-area">
    <h1>Update Offender</h1>
    <form @submit="updateOffender">
      <div class="form-group">
        <h3>Personal Data</h3>
        <div class="input-group">
          <label for="offender">Offender</label>
          <input
            type="text"
            id="offender"
            name="offender"
            placeholder="Offender"
            @change="handleInput"
            :value="currentData.Offender_ODB"
          />
        </div>
        <div class="input-group">
          <label for="personalnumber">Personal Number</label>
          <input
            type="text"
            id="personalnumber"
            name="personalnumber"
            placeholder="Personal Number"
            @change="handleInput"
            :value="currentData.PersonalNumber_ODB"
          />
        </div>
        <div class="input-group">
          <label for="birthdate">Birthdate</label>
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            @change="handleInput"
            :value="currentData.BirthDate_ODB"
          />
        </div>
      </div>
      <div class="form-group">
        <h3>Address</h3>

        <div class="input-group">
          <label for="nationality">Nationality</label>
          <select id="nationality" name="nationality" @change="handleInput">
            <option
              v-for="nationality of nationalities"
              v-bind:value="nationality.ID_Nationality_ODB"
              :key="nationality.ID_Nationality_ODB"
              :selected="currentData.Nationality_ODB===nationality.ID_Nationality_ODB"
            >{{ nationality.Nationality_ODB }}</option>
          </select>
        </div>
        <div class="input-group">
          <label for="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            @change="handleInput"
            :value="currentData.Address_ODB"
          />
        </div>
      </div>
      <div class="form-group">
        <h3>Offenses</h3>

        <div class="input-group">
          <label for="offensesnumber">Offenses Number</label>
          <input
            type="text"
            id="offensesnumber"
            name="offensesnumber"
            placeholder="Offenses Number"
            @change="handleInput"
            :value="currentData.OffensesNumber_ODB"
          />
        </div>
        <div class="input-group">
          <label for="restitutionactive">Restitution Active</label>
          <select id="restitutionactive" name="restitutionactive" @change="handleInput">
            <option :selected="currentData.RestitutionActive_ODB==1" value="1">Yes</option>
            <option :selected="currentData.RestitutionActive_ODB==0" value="0">No</option>
          </select>
        </div>
      </div>
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentData: {},
      updatedData: {},
      nationalities: [],
      offender: {
        offender: "",
        personalnumber: "",
        birthdate: "",
        nationality: "",
        address: "",
        offensesnumber: "",
        restitutionactive: ""
      }
    };
  },
  created() {
    this.loadNationalities();
    this.$http
      .get("http://slimapp/api/offenderbyid/" + this.$route.query.id)
      .then(data => {
        console.log(data.body);
        this.currentData = data.body;
      });
  },
  methods: {
    loadNationalities() {
      this.$http
        .get("http://slimapp/nationalities.php/api/nationalities")
        .then(data => {
          this.nationalities = data.body;
        });
    },
    handleInput(e) {
      this.offender[e.target.name] = e.target.value;
    },
    updateOffender(e) {
      e.preventDefault();
      for (let key in this.offender) {
        if (this.offender[key] !== "") {
          this.updatedData[key] = this.offender[key];
        } else {
          this.updatedData[key] = this.currentData[this.convertKeys(key)];
        }
      }
      this.$http
        .put(
          "http://slimapp/api/offender/update/" + this.$route.query.id,
          this.updatedData
        )
        .then(() => {
          alert("Offender Updated successfully");
          this.$router.push("/");
        });
    },
    convertKeys(key) {
      switch (key) {
        case "offender":
          return "Offender_ODB";
        case "personalnumber":
          return "PersonalNumber_ODB";
        case "birthdate":
          return "BirthDate_ODB";
        case "nationality":
          return "Nationality_ODB";
        case "address":
          return "Address_ODB";
        case "offensesnumber":
          return "OffensesNumber_ODB";
        case "restitutionactive":
          return "RestitutionActive_ODB";
        default:
          return "Unknown Key";
      }
    }
  }
};
</script>


<style>
.add-offender-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.add-offender-area h1 {
  color: var(--mainBG);
}
.add-offender-area form {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.add-offender-area .input-group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.add-offender-area .input-group input,
.add-offender-area .input-group select {
  width: 70%;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 2px solid var(--mainBG);
}
.add-offender-area .input-group input::placeholder,
.add-offender-area .input-group select {
  padding-left: 15px;
}
.add-offender-area .input-group label {
  display: inline-block;
  width: 10%;
}
.add-offender-area input[type="submit"] {
  width: 150px;
  padding: 10px 30px;
  border: none;
  outline: none;
  background-color: var(--mainBG);
  color: white;
  cursor: pointer;
  margin-right: 580px;
}
.add-offender-area .form-group {
  width: 100%;
  background-color: rgb(243, 214, 160);
  padding: 25px;
  margin: 10px 0;
}
.add-offender-area .form-group h3 {
  color: #5e5c5c;
}
</style>