<template>
  <div class="searchbar">
    <i class="fa fa-search searchicon" aria-hidden="true"></i>

    <input
      type="text"
      class="fa"
      v-model="searchBarValue"
      @input="$emit('change', searchBarValue)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  props: ["placeholder", "ebabobu"],
  data() {
    return {
      searchBarValue: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.searchbar {
  input {
    border: none;
    background-color: white;
    flex: 1;
    font-family: "Raleway", sans-serif;
  }
  input,
  input:focus,
  input:hover,
  input:active {
    outline: none;
    box-shadow: none;
  }
  .searchicon {
    margin: 0 10px;
    color: gray;
  }
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  width: calc(100% - 200px);
  background-color: white;
  border: none;
}
@media (max-width: 1000px) {
  .searchbar {
    width: 75%;
    margin-right: 0px;
    input {
    }
    .searchicon {
    }
  }
}
</style>