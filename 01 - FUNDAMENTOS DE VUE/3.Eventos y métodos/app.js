new Vue({
    el: '#app',
    data: {
        title: 'Titulo con v-if!',
        visible: false,
    },
    methods: {
        toggleVisible: function () {
            this.visible = !this.visible
        }
    }
})