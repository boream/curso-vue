Vue.component('my-component', {
    props: ['title'],
    data: {
        components: [
            { title: 'Componente 1' },
            { title: 'Componente 2' },
            { title: 'Componente 3' },
        ],
        visible: false,
    },
    template: `
    <div>
      <h2>{{ title }}</h2>  
    </div>
  `,
})

new Vue({
    el: '#app',
    data: {
        components: [
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