<template>
  <div class="time--wrapper mx-auto" id="ctTime">
    <div class="hour" id="hrUsa" :style="{transform:hourRotate}"></div>
    <div class="min" id="mnUsa" :style="{transform:minuteRotate}"></div>
    <div class="sec" :class="color" id="scUsa" :style="{transform:secondRotate}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeList: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      hourRotate: "rotatez(0deg)",
      minuteRotate: "rotatez(0deg)",
      secondRotate: "rotatez(0deg)",
    };
  },
  props: ["time", "color"],
  watch: {
    time() {
      this.show();
    },
  },
  methods: {
    show() {
      this.showTime();
      if (this._timer) clearInterval(this._timer);
      if (!this.time) {
        this._timer = setInterval(() => {
          this.showTime();
        }, 1000);
      }
    },
    showTime() {
      let times;
      if (this.time) {
        times = this.time.split(":");
      } else {
        const now = new Date();
        times = [now.getHours(), now.getMinutes(), now.getSeconds()];
      }

      let hour = +times[0];
      hour = hour > 11 ? hour - 12 : hour;
      let minute = +times[1];
      let second = +times[2] || 0;
      let hourAngle = hour * 30 + ((minute * 6) / 360) * 30;
      let minuteAngle = minute * 6;
      let secondAngle = second * 6;
      this.hourRotate = `rotatez(${hourAngle}deg)`;
      this.minuteRotate = `rotatez(${minuteAngle}deg)`;
      this.secondRotate = `rotatez(${secondAngle}deg)`;
    },
  },
  mounted() {
    this.show();
  },
  destroyed() {
    if (this._timer) clearInterval(this._timer);
  },
};
</script>
