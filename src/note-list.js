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

    exports.NoteList = NoteList;

})(this); 

