var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is no Truthy");
        } else {
            console.log("Assertion passed: " + assertionToCheck + " is true")
        }
        
            
    }
};

function testNoteSaysHello() {
    var note = new Note("Hello");
    assert.isTrue(note.text == "Hello")
}

testNoteSaysHello()