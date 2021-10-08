const app = Vue.createApp({
	// data, functions

	data() {
		return {
			url: "https://music.youtube.com/",
			showBooks: true,
			books: [
				{
					title: "Goodbye",
					author: "Mandem",
					img: "Images/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg",
					isFav: true,
				},
				{
					title: "Hello, Hi",
					author: "Coach",
					img: "Images/d97c518471a161c6badd53b365ca55d6.jpg",
					isFav: false,
				},
				{
					title: "Power of Now",
					author: "Life",
					img: "Images/Sin-Eater-by-Megan-Campisi.jpg",
					isFav: true,
				},
			],
			x: 0,
			y: 0,
		};
	},
	methods: {
		changeTitle() {
			this.title = "Hello Idiot";
		},
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
		handleEvent() {
			console.log("event");
		},
		handleMouseMove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		changeFav(book) {
			book.isFav = !book.isFav;
		},
	},
	computed: {
		filteredBooks() {
			return this.books.filter((book) => book.isFav);
		},
	},
});

app.mount("#app");
