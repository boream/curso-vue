Vue.component('my-first-component', {
    props: ['title'],
    template: `
    <div>
      <h2>{{ title }}</h2>  
    </div>
  `,
});
// Importante - La instancia de Vue debe estar declarada debajo de la declaración del componente.
// Sino el componente no sera reconocido.
new Vue({
    el: '#app'
});
