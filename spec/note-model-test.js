var assert = {
    isTrue: function(message, assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + message + " is no Truthy");
        } else {
            console.log("Assertion passed: " + message + " is true")
        }
            
    }
  };

function testNoteSaysHello() {
    var note = new Note("Hello");
    assert.isTrue("note returns hello", note.text == "Hello")
}

testNoteSaysHello()

function testCanReturnNote() {
    var note = new Note("Hello");
    assert.isTrue("method returns note", note.text === "Hello");
};

testCanReturnNote()

