Vue.component('deletenote', {
//'title' used as a prop for component 'deletenote'
    props : ['title'],

    data: function () {
        return{

            title: 'notes',
            isvisible: true
        }

    },

    //template used to hide notes not needed using isvisible variable
    //isvisible is set to false once the button is clicked
    template:
        '<span>\
      <li class="list-group-item" v-show="isvisible">\
          {{ title }}\
          <button type="button" @click="isvisible= false">X</button>\
      </li>\</span>'
  });


new Vue ({

    el: '#root',

    data: {

        notes: ['Appointment with doctor.',
            'Pick up dry cleaning.',
            'Submit assignment.'
        ]


    },


    methods: {

        addnote: function () {
            //function adds new notes to the list
            this.notes.push(this.newnote);

            this.newnote = '';
        }

        }



});