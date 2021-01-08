<template>
  

    <ag-grid
    class="ag-theme-alpine"
    :column-defs="cols"
    :row-data="rowData"
    :column-types="columnTypes"
    :dom-layout="domLayout"
    :auto-fit="autoFit"
    @first-data-rendered="onFirstDataRendered"
  >
  </ag-grid>

<grid :cols="cols" :rows="rows" :sort=true :pagination=true :search=true></grid>
</template>
<script>
//import {Grid} from 'gridjs-vue';
import { agGrid, LicenseManager } from '@ag-grid-enterprise/core';
//import {SetFilterModule} from '@ag-grid-enterprise/set-filter';

LicenseManager.setLicenseKey("your license key");
export default {
  components: {
    Grid
  },
  data() {
      return {
        cols: ['Make', 'Model', 'Year', 'Color'],
        rows: [
          ['Ford', 'Fusion', '2011', 'Silver'],
          ['Chevrolet', 'Cruz', '2018', 'White']
        ]
      }
    }
}
</script>