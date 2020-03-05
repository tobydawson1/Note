function testDefaultArrayOfNotes() {
    var noteList = new NoteList() 
        assert.isTrue("Note book has a default empty array", noteList.notes.length == 0)
}; 

testDefaultArrayOfNotes()  

const describe = (desc, fn) => {
    console.log(desc)
    fn()
  }
  
  const it = (msg, fn) => describe('  ' + msg, fn)
  
  const matchers = (exp) => ({
    toBe: (assertion) => {
      if (exp === assertion) {
        console.log('pass')
        return true
      } else {
        console.log('fail')
        return false
      }
    }
  })
  
  const expect = (exp) => matchers(exp)
  

describe('Notelist', () => {
    var noteList = new NoteList()
    noteList.add("Hello there friend!")
    it('displays a note', () => {
        const result = noteList.notes[0]
        expect(result).toBe("Hello there friend!")
    })
})