<template>
  <div>
    <home-plans></home-plans>
    <meal-recipes></meal-recipes>
  </div>
</template>

<script>
import MealRecipes from "@/components/MealRecipes";
import HomePlans from "@/components/HomePlans";

export default {
  name: "Menu",
  components: {
    HomePlans,
    MealRecipes
  }
};
</script>
