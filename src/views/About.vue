<template>
  <div id="app">
    <TabulatorComponent
      :dataMas="data"
      :options="options"
    />
  </div>
</template>

<script>
import TabulatorComponent from 'tabulator-vue';
import 'tabulator-vue/dist/tabulator-vue.css';

export default {
  name: '#app',
  components: {
    TabulatorComponent
  },
  data () {
    return {
      data: [
        {
          name: 'Tom',
          age: 14
        },
        {
          name: 'Jack',
          age: 11
        },
         {
          name: 'May',
          age: 15
        },
         {
          name: 'Paul',
          age: 18
        },
         {
          name: 'David',
          age: 10
        },
      ],
      options: {
        columns: [
            {
              title: 'Name',
              field: 'name',
              sorter: 'string',
              width: 200,
              editable: false,
            },
            {
              title: 'Age',
              field: 'age',
            },
        ],
        autoResize: false,
        columnHeaderVertAlign:"center",
      },
    }
  }
}
</script>