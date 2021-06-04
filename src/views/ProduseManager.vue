<template>
  <div class="productmanager">
    <div
      class="modal fade bd-example-modal-xl"
      style="margin-top: 100px"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <AddProductForm />
        </div>
      </div>
    </div>

    <el-row type="flex" class="row-bg" justify="center" sty>
      <el-col>
        <el-button
          type="primary"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          <i class="fas fa-plus" style="margin: 5px"></i>Adaugă
          produs</el-button
        ></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col v-for="(o, index) in 10" :key="o" :offset="index">
        <el-card :body-style="{ padding: '20px' }">
          <img src="../assets/tomato.jpg" class="image" />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <el-button type="primary">Modificare</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AddProductForm from "../components/AddProductForm";
export default {
  components: { AddProductForm },
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style>
.el-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.el-col {
  width: 20%;
  transition: 0.3s all;
  margin: 20px;
}

.el-button {
  background-color: #27ae60;
  border-color: #27ae60;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #1b8448;
  border-color: #1b8448;
}
img {
  width: 80%;
}
@media (max-width: 1020px) {
  .el-col {
    width: 40%;
  }
}
@media (max-width: 680px) {
  .el-col {
    width: 80%;
  }
}
</style>


