const app = Vue.createApp({
	data() { return {username:'Sudarshan',Age:22,mediaURL:'data:image/jpeg;base64,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' };  }
});
app.mount('#assignment')