<template>
  <!-- ver1 基本+focus -->
  <div class="container">
    <h2 class="text-center mt-5">My Vue To Do App</h2>
    <!-- input -->
    <div class="d-flex">
      <input
        v-model="task"
        type="text"
        placeholder="Enter task"
        class="form-control"
        v-on:keyup.enter="submitTask"
      />
      <!-- 新增 -->
      <button @click="submitTask" class="btn btn-warning rounded-0">
        submit
      </button>
    </div>
    <!-- task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">修改</th>
          <th scope="col" class="text-center">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index" :class="task.onfocus">
          <td>
            <span :class="{ finished: task.status === '已完成' }">{{
              task.name
            }}</span>
          </td>
          <!-- td class="changeStatus" -->
          <td
            @click="changeStatus(index)"
            :class="{
              'text-danger': task.status === '待辦',
              'text-warning': task.status === '進行中',
              'text-success': task.status === '已完成',
            }"
          >
            {{ task.status }}
          </td>
          <td>
            <!-- 修改 -->
            <div @click="editTask(index)" class="text-center">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <!-- 刪除 -->
            <div @click="deleteTask(index)" class="text-center">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data() {
    return {
      //用於輸入後清空input
      task: "",
      // 用於檢查編輯
      editedTask: null,
      // status :to-do, in-progress,finished
      availableStatues: ["待辦", "進行中", "已完成"],
      tasks: [],
    };
  },
  methods: {
    // 新增
    submitTask() {
      //測試console 看輸入的內容
      // console.log(this.task)
      // 當什麼都沒輸入時   什麼都不做
      if (this.task.length === 0) return;

      // 判斷有沒有修改
      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "待辦",
          onfocus: "",
        });
      } else {
        // 修改資料=輸入資料
        this.tasks[this.editedTask].name = this.task;
        // 修改完成移除顏色標記
        this.tasks[this.editedTask].onfocus = "";
        this.editedTask = null;
      }

      this.task = "";
    },

    // 刪除
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    // 修改
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
      // 修改時加顏色標記
      this.tasks[index].onfocus = "focus";
    },

    // 更改狀態
    changeStatus(index) {
      let newIndex = this.availableStatues.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatues[newIndex];
    },
  },
  //test
  mounted: function () {
    console.log('開始時,沒有預設待辦事項');
  },
  //test
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.changeStatus {
  cursor: pointer;
  width: 150px;
}
.finished {
  text-decoration: line-through;
}
.focus {
  background-color: bisque;
}
</style>
