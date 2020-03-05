(function(exports) { 
    function NoteList() {
        this.notes = []
    }
    
    
    NoteList.prototype.display = function() {
        this.note = this.notes.pop();
        return this.note
    }

    NoteList.prototype.add = function(arg) {
        this.notes.push(arg)
    }    

    NoteList.prototype.store = function(string) {
        var note = new Note(string)
    }

    exports.NoteList = NoteList;

})(this); 

