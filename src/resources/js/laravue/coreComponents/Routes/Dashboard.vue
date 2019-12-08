<template>
  <v-container>
    <v-flex class="display-1 font-weight-light ma-5">
      Dashboard
    </v-flex>
    <v-row width="auto">
      <v-col>
        <v-card
          class="mx-auto text-center lighten-4"
          color="secondary"
          dark
          max-width="600"
        >
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="values[1]"
                label-size="13"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> {{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-thin">Traffic</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text>Go to Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto text-center lighten-2" color="green" dark>
          <v-card-text>
            <v-sheet color="white">
              <v-sparkline
                :value="values[0]"
                label-size="13"
                color="#555"
                height="100"
                padding="24"
                stroke-linecap="round"
                :gradient="gradients[5]"
                gradient-direction="bottom"
                smooth
                style="font-size: 1rem"
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-thin">Revenue</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text>Go to Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto text-center lighten-1" color="orange" dark max-width="600">
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="values[2]"
                label-size="13"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> {{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="display-1 font-weight-thin">Registrations</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text>Go to Report</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "green", "green"]
  ]

  export default {
    name: "Dashboard",
    route: {
      name: "home",
      path: ""
    },
    data: () => ({
      lineCap: "round",
      chart1: {
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        value: [200, 675, 410, 390, 310, 460, 250, 240]
      },
      values: [
        [0, 2, 5, 9, 5, 10, 3, 5],
        [10, 8, 12, 11, 5, 16, 15, 13],
        [0, 0, 2, 1, 0, 3, 0, 1]
      ],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: true
    })
  }
</script>

<style scoped></style>
