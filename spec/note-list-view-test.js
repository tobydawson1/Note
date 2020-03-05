describe('NoteView', () => {
    
    var noteview = new NoteView()
    var notelist = new NoteList()
    notelist.add("hello")
    
    it('initialises a note', () => {
        const result = notelist.notes[0]
        expect(result).toBe("hello")
    })
})
