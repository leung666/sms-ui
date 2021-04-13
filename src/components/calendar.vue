<template>
  <div class="mainBox">
    <Calendar
      :textTop="['S','M','T','W','T','F','S']"
      v-on:choseDay="clickDay"
      :sundayStart='true'>
    </Calendar>
  </div>
</template>
<script>
import Calendar from 'vue-calendar-component'
export default {
  name: 'calendar',
  data () {
    return {
    }
  },
  components: {
    Calendar
  },
  methods: {
    clickDay (today) {
      // today格式为2020/8/7 改为 20200807
      let date = today.split('/')
      if (date[1].length < 2) {
        date[1] = '0' + date[1]
      }
      if (date[2].length < 2) {
        date[2] = '0' + date[2]
      }
      date = date.join('')
    }
  }
}
</script>
<style lang="scss">
.mainBox {
  width:100%;
  width:100%;
  .wh_content_all {
    background-color: #08214d;
    .wh_top_changge li {
      color: #1fb331;
    }
    .wh_content_item {
      .wh_item_date {
        color:#1ae558;
      }
      .wh_other_dayhide{
        color:#bfbfbf;
      }
      .wh_chose_day {
        background: #d1ff19;
        color: #0d0b0b;
      }
       .wh_isToday{
        background: #33ad53;
        color: #0d0b0b;
      }
    }
  }
}
</style>
