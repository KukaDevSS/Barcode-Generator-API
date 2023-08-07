<template>
  <div class="container">
    <div class="w-full">
      <input
      type="text"
      v-model="filterKeyword"
      placeholder="Search By Laoname..."
      class="form-control mt-4 w-50 mx-auto font-bold"
    />
    </div>
    <table class="fix-table mt-4">
      <thead>
        <tr class="text-center">
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">id</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">laoname</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">itemnumber</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">costprice</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">unitprice</th>
          <th class="border border-black px-2 py-2 bg-green-500 text-sm text-white uppercase">itemtype</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.id }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.laoname }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.itemnumber }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.costprice }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">{{ item.unitprice }}</td>
          <td class="border border-black px-2 py-2 text-center text-black">
            <router-link :to="{ name:'ItemNumber', params: {id: item.id, itemnumber: item.itemnumber, laoname: item.laoname} }"><button class="btn btn-outline-primary w-20"><i class="bi bi-printer"></i></button></router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination flex justify-center mt-2 mb-4">
      <button
        class="btn btn-success"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        <i class="bi bi-arrow-left-square me-1"></i>Previous
      </button>
      <span class="mx-2">{{ currentPage }} / {{ totalPages }}</span>
      <button
        class="btn btn-primary w-20"
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

export default {
  data() {
    return {
      items: [],
      itemsPerPage: 10,
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
        item.laoname.toLowerCase().includes(this.filterKeyword.toLowerCase())
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
    // fetchData() {
    //   const apiUrl = "http://172.22.7.22:8858/item";
    //   const loc = "1019";
    //   axios.get(apiUrl, {params: {loc: loc},})
    //     .then((response) => {
    //       this.items = response.data;
    //       console.log(this.items);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    // },
    fetchData(){
      try {
        axios.get('http://172.22.7.22:8888/api/products/1001')
        .then((response) => {
          this.items = response.data;
        })
      } catch (error) {
        console.error(error)
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
.fix-table{
  width: 100%;
}
</style>