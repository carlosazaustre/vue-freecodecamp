<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
        >Available Meal Plans</v-flex
      >
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">KETO</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Keto</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn outline block color="green" @click="showRecipes('keto');"
              >Select this plan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">PALEO</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Paleo</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn outline block color="green" @click="showRecipes('paleo');"
              >Select this plan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs12 sm12 md4>
        <v-card>
          <v-responsive>
            <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">VEGAN</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">Vegan</h3>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mauris felis, varius rutrum massa a, dignissim ornare dui. Cras
                eget velit eu dui tristique lobortis sit amet vel tellus.
              </div>
            </div>
          </v-card-text>
          <v-card-actions v-if="['menu'].includes($route.name)">
            <v-btn outline block color="green" @click="showRecipes('vegan');"
              >Select this plan</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomePlans",

  methods: {
    showRecipes(plan) {
      this.$store.dispatch("getRecipes", plan);
    }
  }
};
</script>
