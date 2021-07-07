<template>
  <div id="app">

    <div class=" mx-auto mt-20 h-80 w-96 px-2 overflow-y-auto bg-widget-bg text-normal-text scroll">
      <h1 class="text-center text-2xl mb-4">Результат задания</h1>
      <div v-for="l in list" :key="l.index" class="flex flex-row justify-start items-center h-29px font-medium px-2.5 pt-9px pb-11px  relative hover:bg-hover-bg hover:rounded focus:text-clicked-text focus:bg-hover-bg focus:rounded focus:filter focus:drop-shadow-clicked clicked " tabindex="0">
        <div class="text-13px w-22px mr-3.5">{{ l.index }}</div>
        <div class="text-13px">{{ l.label }}</div>
        <div class="text-13px absolute right-2.5">{{ `${l.value}%` }}</div>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    list: new Array(30).fill("").map((_, i) => ({
      index: i + 1,
      label: `Любой текст- ${i + 1}`,
      value: Math.round(Math.random() * 100),
    })),
  }),
}
</script>

<style>

</style>
