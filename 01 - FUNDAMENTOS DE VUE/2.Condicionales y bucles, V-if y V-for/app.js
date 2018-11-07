new Vue({
    el: '#app',
    data: {
        title: 'Titulo con v-if!',
        items: [
            { title: 'Componente 1' },
            { title: 'Componente 2' },
            { title: 'Componente 3' },
        ],
        visible: false,
    },
    methods: {
        toggleVisible: function () {
            this.visible = !this.visible
        }
    }
})