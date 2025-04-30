<script>
export default {
  data() {
    return {
      error: '',
      array: [],
      Name: '',
      blog: ''
    }
  },
  methods: {
    newPost() {
      if (this.Name === '' || this.blog === '') {
        this.error = 'Заполните все поля!'
      } else {
        this.array.push({
          Header: this.Name,
          Post: this.blog
        })

        this.error = ''
      }
    },
    newDel(index) {
      this.array.pop(index, 1)
    }
  }
}

</script>

<template>
<div class="cont">
  <h1>
    Пробное SPA приложение
  </h1>
  <div class="wrap">
    <input v-model="this.Name" type="text" className="name" placeholder="Введите название поста">
    <input v-model="this.blog" type="text" className="blog" placeholder="Введите содержимое поста">
    <button type="button" className="btn" @click="newPost">Создать пост</button>
    <p className="error">{{ error }}</p>
  </div>
  <div v-if="array == ''" className="nopost">Нет постов</div>
  <div className="post" v-for="(el, index) in array" :key="index">
    <button className="btn-red" @click="newDel">Удалить</button>
    <h1 className="Header">{{ el.Header }}</h1>
    <p className="Post">{{ el.Post }}</p>
  </div>
</div>
</template>

<style scoped>
.cont {
  width: 450px;
  padding: 30px 450px 30px 430px;
}

.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input {
  height: 30px;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #8dc5ca;
}

.btn {
  align-self: center;
  width: 150px;
  height: 30px;
  font-size: 16px;
  background-color: #8dc5ca;
  border: none;
  border-radius: 15px;
  color: #444444;
}

.error {
  font-size: 20px;
  font-weight: 500;
  color: #ff001e;
}

.nopost {
  text-align: center;
  padding-top: 100px;
  font-size: 30px;
  color: #717171;
}

.post {
  margin-top: 30px;
  border: 1px solid #fff;
  background-color: white;
  border-radius: 20px;
}

.Header {
  padding: 30px 20px;
  padding-bottom: 10px;
}

.Post {
  padding: 15px 20px;
}

.btn-red {
  display: block;
  height: 30px;
  margin-top: -2px;
  margin-left: 330px;
  width: 120px;
  background-color: #ff001e;
  color: #fff;
  border: none;
  border: 1 solid #ff0000;
  border-radius: 20px;
}
</style>
