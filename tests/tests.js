test("hello test", function() {
	ok(1 == "1", "Passed!");
});

test("hello fail", function() {
	ok(0 == "1", "Passed!");
});
