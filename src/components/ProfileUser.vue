<template>
  <div class="profile">
    <div class="row">
      <div class="col">
        <div class="card">
          <ul class="list-group">
            <li class="list-group-item">Email : {{ user.email }}</li>
            <li class="list-group-item">
              Nume utilizator :{{ user.numeUtilizator }}
            </li>
            <li class="list-group-item">
              Nume, prenume {{ user.utilizator.nume }},
              {{ user.utilizator.prenume }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped>
.card {
  width: 70vw;
}
</style>