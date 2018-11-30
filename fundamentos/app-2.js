Vue.component('my-first-component', {
    template: `
        <div>
            <h2>{{title}}</h2>
            <ul v-if="visible">
                <li v-for="(item, index) in items" :key="index">
                    <span>{{item.msg}}</span>
                </li>
            </ul> 
            <button v-on:click="toggleVisible()">Hacer {{visible ? 'invisible' : 'visible' }}</button>
        </div>
      `,
    props: ['title'],
    data: function () {
        return {
            items: [
                { msg: 'Componente 1' },
                { msg: 'Componente 2' },
                { msg: 'Componente 3' },
            ],
            visible: true,
        };
    },
    methods: {
        toggleVisible: function () {
            this.visible = !this.visible
        }
    }
});

new Vue({
    el: '#app',
});
