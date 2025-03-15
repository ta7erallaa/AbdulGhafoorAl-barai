const { createApp, ref } = Vue;

createApp({
  setup() {
    const headerText = ref("وكالة عبد الغفور البرعي للبرمجيات");
    const overlayMessageRamadan = ref("وكالة عبد الغفور البرعي للبرمجيات تهنئكم بحلول شهر رمضان المبارك");
    const overlayMessage = ref("Stay tuned—exciting blogs on software engineering topics are coming soooooon!");
    return {
      headerText,
      overlayMessage,
      overlayMessageRamadan,
    }
  }
}).mount('#app')
