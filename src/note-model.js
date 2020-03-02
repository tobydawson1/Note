(function(exports) {
    function Note(string) {
        this.text = string 

    }
    exports.Note = Note;

    Note.prototype.returnText = function() {
        return this.text
    }

})(this);