(function(exports) {
    function Note(string) {
        this.text = string 
    }
    exports.Note = Note;
})(this);

var note = new Note()
note.text