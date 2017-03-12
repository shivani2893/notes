Vue.component('deletenote', {
//'title' used as a prop for component 'deletenote'
    props : ['title'],

    data: function () {
        return{

            title: 'notes',
            isvisible: true,
            activeEdit: null
        }

    },

    //template used to hide notes not needed using isvisible variable
    //isvisible is set to false once the button is clicked
    template:
        '<span>\
      <li class="list-group-item" v-show="isvisible">\
          {{ title }}\
          <div class="btn-group" role="group" aria-label="...">\
          <button type="button" class="btn btn-default" @click="editNote(note)">EDIT</button>\
          <input type="text" v-model="note.text" @blur="doneEdit(note)" v-show="note == activeEdit">\
        <button type="button" class="btn btn-default" @click="isvisible= false">DELETE</button>\
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
            let note = this.newnote.trim();
            this.notes.push(this.newnote);

            this.newnote = '';
        },

        editNote(note) {
            this.activeEdit = note;
        },

        doneEdit(note) {
            if (!this.activeEdit) {
                return
            }
            this.activeEdit = null;
            note.text = note.text.trim();
        }

    }
});