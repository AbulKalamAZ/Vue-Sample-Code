<template>
    <div class="search">

        <v-text-field
          label="Outline"
          single-line
          outline
          height="10"
          append-icon="search"
        ></v-text-field>

    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
.search{
  width: 35%;
}
</style>
