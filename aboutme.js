const quotes = [
	{
		quote:
			"When something is important enough, you do it even if the odds are not in your favor.",
		author: "Elon Musk"
	},

	{
		quote:
			"Design is not just what it looks like and feels like. Design is how it works.",
		author: "Steve Jobs"
	},

	{
		quote:
			"Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
		author: "Bill Gates"
	},

	{
		quote: "Solving big problems is easier than solving little problems.",
		author: "Sergey Brin"
	},

	{
		quote: "Price is what you pay. Value is what you get.",
		author: "Warrent Buffett"
	},

	{
		quote:
			"Without internet, there would have been no Jack Ma, and no Alibaba or Taobao.",
		author: "Jack Ma"
	},

	{
		quote:
			"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.",
		author: "Mark Zukerberg"
	},

	{
		quote:
			"You don't learn to walk by following rules. You learn by doing, and by falling over.",
		author: "Richard Branson"
	},

	{
		quote:
			"If you aren't embarrassed by the first version of your product, you shipped too late.",
		author: "Ried Hoffman"
	},

	{
		quote:
			"Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use.",
		author: "Reed Hastings"
	}
];

quote = document.getElementById("quote");
author = document.getElementById("author");

function generateQuote() {
	quotepick = randomQuote();

	quote.innerText = quotes[quotepick].quote;
	author.innerText = quotes[quotepick].author;
}

function randomQuote() {
	let num = Math.floor(Math.random() * Math.floor(quotes.length));

	return num;
}