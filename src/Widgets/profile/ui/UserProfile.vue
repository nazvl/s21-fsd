<script setup lang="ts">
import {useUserStore} from "@/Widgets/profile/model/userStore.ts";
import {onMounted} from "vue";
import Avatar from "@/Widgets/profile/ui/Avatar.vue";
import CustomProgressBar from "@/Shared/CustomProgressBar.vue";
import Location from "vue-material-design-icons/Map.vue"
const store = useUserStore();

onMounted(async () => {
  await store.getData()
})
//TODO: сделать расчет процентажа для прогресс бараs
// const percentage = computed(() => {
//   const fullLevel = store.data.expValue + store.data.expToNextLevel;
//   return ( store.data.expToNextLevel / fullLevel) * 100;
// })
</script>

<template>
  <div class="container flex flex-col gap-4 items-center justify-center p-5">
    <Avatar class="hover:border-b-green-800 hover:shadow-green-600 hover:shadow-2xl transition"></Avatar>
    <div class="flex flex-col gap-2 text-center">
      <p class="font-bold text-xl">{{ store.data.login }}</p>
      <p class="font-semibold">{{ store.data.parallelName }} - {{ store.data.className }}</p>
      <CustomProgressBar class="mt-3" :value="21" :start="'lvl ' + store.data.level"
                         :end="store.data.expToNextLevel + 'XP left'"></CustomProgressBar>
      <div>
        <h3 class="text-left mt-2 font-bold">Points</h3>
        <div class="flex flex-row gap-2 mt-2">
          <p class="rounded-4xl bg-gray-300 text-black px-1.5">{{ store.data.expValue }} XP</p>
          <p class="rounded-4xl bg-orange-500 text-black px-1.5">{{ store.points.peerReviewPoints }} PRP</p>
          <p class="rounded-4xl bg-blue-500 text-white px-1.5">{{ store.points.codeReviewPoints }} CRP</p>
          <p class="rounded-4xl bg-purple-600 text-white px-1.5">{{ store.points.coins }} Coins</p>

        </div>
      </div>
      <div class="mt-2 border-b-2 border-green-800 text-white pb-3">
        <h3 class="text-left font-bold">Peer feedback</h3>
        <div class="flex flex-col gap-2 mt-2">
          <p class="rounded-4xl  border-2 px-1.5">Interested: {{ store.feedback.averageVerifierInterest }}</p>
          <p class="rounded-4xl  border-2 px-1.5">Punctuality: {{ store.feedback.averageVerifierPunctuality }}</p>
          <p class="rounded-4xl  border-2 px-1.5">Rigorous: {{ store.feedback.averageVerifierThoroughness }}</p>
          <p class="rounded-4xl  border-2 px-1.5">Nice: {{ store.feedback.averageVerifierFriendliness }}</p>
        </div>
      </div>
      <div class="flex justify-center">
        <Location></Location> <p>{{ store.data.campus?.shortName}}</p>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>