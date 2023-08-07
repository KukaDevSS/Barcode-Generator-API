<template>
  <div class="ms-4 me-4">
    <div class="">
      <input
      type="text"
      v-model="filterKeyword"
      placeholder="ຄົ້ນຫາສິນຄ້າ..."
      class="form-control mt-4 w-50 mx-auto font-bold input"
    />
    </div>
    <div class="over">
      <table class="fix-table mt-4">
      <thead>
        <tr class="text-center">
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">id</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">laoname</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">itemnumber</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">costprice</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">unitprice</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">print QR</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">ພິມລາຄາ</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr v-for="item in filteredItems" :key="item.id">
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.id }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.laoname }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.itemnumber }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ (parseFloat(item.costprice) / 1000).toFixed(3) + " ກີບ" }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ (parseFloat(item.unitprice) / 1000).toFixed(3) + " ກີບ" }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">
            <router-link :to="{ name:'ItemNumber', params: {id: item.id, itemnumber: item.itemnumber, laoname: item.laoname} }"><button class="btn btn-success w-20"><i class="bi bi-printer"></i></button></router-link>
          </td>
          <td class="border border-black px-2 py-2 text-center text-black">
            <router-link :to="{ name:'codePrice', params: {id: item.id, itemnumber: item.itemnumber, unitprice: item.unitprice} }"><button class="btn btn-success w-20"><i class="bi bi-printer"></i></button></router-link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="pagination flex align-items-center justify-center mt-2 mb-4">
      <button
        class="btn btn-success"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        <i class="bi bi-arrow-left-square me-1"></i>Previous
      </button>
      <span class="mx-2">{{ currentPage }} / {{ totalPages }}</span>
      <button
        class="btn btn-primary w-33"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        Next<i class="bi bi-arrow-right-square ms-1"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { apiUrl  } from '../../apiConfig';

export default {
  data() {
    return {
      items: [],
      itemsPerPage: 13,
      currentPage: 1,
      filterKeyword: '',
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
    filteredItems() {
      const filtered = this.items.filter(item =>
        item.laoname.toLowerCase().includes(this.filterKeyword.toLowerCase()) ||
        item.itemnumber.toString().toLowerCase().includes(this.filterKeyword.toLowerCase())
      );

      // Apply pagination to the filtered results
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return filtered.slice(start, end);
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
     fetchData(){
      try {
      axios.get(apiUrl)
      .then((response) => {
        this.items = response.data
      })
  } catch (error) {
      console.error(error);
  }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Lobster&family=Noto+Sans+Lao&family=Noto+Serif+Lao:wght@900&family=Oswald:wght@700&family=Tapestry&display=swap');
.fix-table{
  width: 100%;
}
*{
  font-family: 'Noto Sans Lao', sans-serif;
}
.input{
  font-family: 'Noto Sans Lao', sans-serif;
}
</style>