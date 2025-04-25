<script>
	import Scroller from './Scroller.svelte'; 

	const images = [
	{src: '/Final-Project/CatsofJPFacebook.png', alt:'Image is a screenshot of a facebook group home page. The theme picture is a photo of an orange and black cat curiously sniffing a purple flower', 
	 	caption: 'The landing page for the Cats of Jamaica Plain Facebook group.'},
	{src: '/Final-Project/CatsofJPFacebook.png', alt:'', 
		caption: 'The landing page for the Cats of Jamaica Plain Facebook group.'},
	{src: '/Final-Project/MysteryOutside.jpg', alt:'A grey-ish cat sits on the sidewalk with her back to the camera. She practically blends in with the cement and pavement around her', 
		caption: 'This is a mystery cat I ran into soon after I moved to Boston.'},
	{src: '/Final-Project/GiddyBunny.jpg', 
		alt:'A black cat lays down facing the camera on a bed of mulch and flower petals. Next to him sits a young bunny. The two are touching and seem quite content to snuggle peacefully.', 
		caption: 'This bunny is as safe as it gets: Giddy\'s well-fed, snuggly, and he doesn\'t have any teeth!'},
	{src: '/Final-Project/GiddyBunny.jpg', alt:'', caption: 'This bunny is as safe as it gets: Giddy\'s well-fed, snuggly, and he doesn\'t have any teeth!'},
	{src: '/Final-Project/GiddyBunny.jpg', alt:'', caption: 'This bunny is as safe as it gets: Giddy\'s well-fed, snuggly, and he doesn\'t have any teeth!'},
	{src: '/Final-Project/PounceWantsIn.jpg', alt:'A cat with black and white spots like a cow looks in through a sliding glass door expectantly. A floral patterned chair in the foreground slightly obscures the view.', caption: 'The mayor of Jamaica Plain is paying his constituents a visit. [Picture credit: Erica Desautels]'},
	{src: '/Final-Project/PounceWantsIn.jpg', alt:'', caption: 'The mayor of Jamaica Plain is paying his constituents a visit. [Picture credit: Erica Desautels]'},
	{src: '/Final-Project/bird.jpg', alt:'An tastefully bloodless close-up of a tabby cat holding a songbird in its mouth, framed by out of focus greenery.', caption: 'Cats kill an estimated 2.4 billion birds in the United States alone each year.'},
	{src: '/Final-Project/FitziOutside.jpg', alt:'Two tortoise shell cats sit outside on a brick patio, with their backs to the camera. The left cat is sitting in a loaf, and the red leash tethering it to safety is clearly visible. The cat on the right side doesn\t have a visible leash, but her pink collar is visible as she sits in profile.', caption: 'Fifi and Mitzi enjoy their outside time, even on cloudier days like this one.'},
	{src: '/Final-Project/PierreOutside.jpg', alt:'A one-eyed, grey Maine Coon cat lounges happily on a portable plastic staircase. He is outside on a porch, up against the house\s siding. The sky is a clear blue and the sun is strong.', caption: 'Pierre LOVES his porch.'},
	{src: '/Final-Project/NiaOutside.jpg', alt:'An orange cat standing on a cobblestone walkway scattered with leaves looks to the left, distracted from the photographer she was approaching.', caption: 'This is one of Giddy\s indoor-outdoor neighbors, Nia!'},

];
	
	let count;  // total sections in scroller
	let index;  // which section number is currently active (starts at 1)
	let offset;  // how far through the current section you have scrolled (0 to 1)
	let progress; // how far through the whole scroller you have gone (0 to 1) 
	let top = 0; // how far from top of screen is fixed background
	let threshold = 0.5; // how far onto a scren next section must come before count increments to next
	let bottom = 0.9; // how far from bottom of screen fixed area ends
</script>



<!-- the Scrolling component from the Svelte team -->
<Scroller
	{top}
	{threshold}
	{bottom}
	bind:count
	bind:index
	bind:offset
	bind:progress
>

	<!-- the FIXED layer of the scroller -->
	<!-- the margin here is a key way to determine overlay vs. side-by-side -->
	
	<div slot="background" class="background-image"> <!--style="margin: 5% 0 0 50%--> <!--static image frame for cat; set to righthand side of screen -->
		<img src={images[index]?.src} alt={images[index]?.alt} />
			<p class="caption">{images[index]?.caption}</p>
	</div>

	<!-- the SCROLLING layer of the scroller -->
	<!-- the padding here is a key way to determine overlay vs. side-by-side -->
	<div slot="foreground" style="padding: 0 50% 0 0;"> <!--scrolling article text; set to lefthand side of screen -->
		<section>
			<p>
				Enter <a href="https://www.facebook.com/groups/1161607534008220/">Cats of Jamaica Plain</a>, a Facebook group with over three thousand members that’s served as a hub for 
				cat-food swaps, behavioral advice, and tracking/trapping assistance since 2018. 
				<br/>
				<br/>
				I missed my parents’ cats desperately, so when I stumbled on the group in my “suggested” feed, I was thrilled. 
				At first I just sat back and enjoyed the steady feed of cat pictures, but soon it became apparent that this 
				group was much, much more than that: it was a community center. Cats of Jamaica Plain brings people together 
				like the internet used to do, in its late-aughts/early teens heyday. 
			</p>
		</section> 

		<section>
			<p>I spoke with group founder, <b>Erica Lewy</b>, on the Facebook group and her decision to create it: 
				<br/>
				<br/>
				“In 2018, I founded the Cats of Jamaica Plain Facebook group, inspired by the existing Dogs of Jamaica Plain 
				community and the belief that local cat enthusiasts deserved a space of their own… Each season, members vote for 
				a featured neighborhood cat through photo submissions and likes, fostering a sense of connection and fun. For the 
				past three years, with the generous support of group members, we have produced an annual cat calendar, with proceeds 
				benefiting cat-focused charities. The group’s mission is to support local cat owners and enthusiasts while building 
				a vibrant, cat-loving community in Jamaica Plain.”
				<br/>
				<br/>
				And I must say, it fulfils that mission handily. Cat owners in need of medications, food, advice, and vet recommendations 
				have their needs met and their questions answered by their highly-engaged neighbors. Additionally, material needs aside, 
				the group regularly receives pleas for help in locating escaped kitties, and reports of stray, lost, and feral 
				cats come in nearly every week. The hivemind can typically quickly identify whether any given cat is an indoor/
				outdoor friend who’s enjoying a stroll, versus a lost domestic, versus a feral.
				<br/>

			</p>
		</section>

		<section>
			<p>
				Even before I got personally involved in JP's cat community, it was delightful to witness the connections that’d 
				already been built around thousands of strangers’ and neighbors’ love of cats. But my foray into answering the 
				frequent cat-sitting requests in the group is what really helped me start to feel connected to my new hometown.
				What began as a one-off local gig grew and transformed into a robust small business. Providing pet care has 
				helped me explore the neighborhood, connected me with new friends and mentors, and allowed me to support myself 
				through grad school. And best of all: it’s given me lots of encounters with our wonderful indoor/outdoor community 
				cats and their humans!
			</p>
		</section>

		<section>
			<p>
				Take <b>Giddy</b>, for example. A friendly, chunky, all-black cat sporting a dashing airtag on his collar, Giddy is 
				a pillar of the JP kitty community. In researching more about JP's cats, I reached out to his mom, <b>Christina</b>, 
				to ask about his backstory. 
				<br/>
				<br/>
				"During the pandemic, I became an empty nester. My husband, who's a family doctor, was working seven days a week, 
				testing and taking care of patients. I was alone in the house most of the time. I decided I wanted a cat. 
				<br/>
				I knew I wanted an older Tom cat with a friendly disposition. It was actually very hard to find a pet 
				to adopt at the time because there was a lot of demand. Through Facebook, I finally met a man named Mike who was 
				fostering a black Tom cat. I told him I was interested in adopting the cat. We set up a Facetime, so that I could 
				meet the cat. 
				<br/>
				I could tell right away that he was the one. The only problem was this cat was being fostered in Kansas City. 
				<br/>
				As a first responder, my husband was among the first people to get vaccinated for COVID-19. Being vaccinated made 
				it safer for him to travel. I asked my husband to take a one day trip to meet Mike in Kansas City to pick up the cat."
			</p>
		</section>

		<section>	
			<p>
				"It only took Giddy about 12 hours to feel comfortable in his new home in that early spring of 2020. Since this time, 
				Gibby has filled our lives with more love that we could've imagined. He is the unofficial mayor of Jamaica Plain. 
				We are constantly seeing him show up in the Jamaica Plain Facebook group and the Cats of JP Facebook group. I have a 
				whole bevy of voice messages and text messages from strangers who have met Giddy and have had Giddy follow them on walks. 
				My photo album is full of strangers who have taken pictures selfies with Giddy and sent them to me. 
				<br/>
				Giddy loves all people, but he does have a particular passion for little kids. There are several little ones in the 
				neighborhood that make special trips with their parents over to pet Giddy when their parents come home from work. He 
				never tires of rolling around on the pavement for them and getting his fill of belly rubs. 
				<br/>
				I'm so fortunate to have Giddy in my life and so fortunate that he has brought so much happiness to this community. 
				He is the gentlest cat I've ever met, and he's my best friend."
			</p>
		</section>

		<section>
			<p>
				Giddy's one of the things that weaves Jamaica Plain together. Nearby neighbors Emily and Julian dote on him, 
				regularly making detours to visit the quiet street he frequents. I take care of their trio of kitties on 
				occasion and asked them about the friendly black cat I'd met around the corner from them one day- they were 
				<i>more</i> than eager to regale me with tales of his exploits. 
				<br/>
					“One time he got a ride in the mail truck, because the mailman knows him.”
					<br/>
					“I’ve met so many neighbors through Gid! I regularly get updates on his goings on about town via neighbors and 
					folks passing through.”
					<br/>
					"We introduce him to everyone that comes to visit us, and then he comes on our walk with us. He followed us for 
					six blocks once."
					<br/>
					“I put him in the special thanks notes of an album I worked on. So he's immortal now.” 
			</p>
		</section>

		<section>
			<p>
				<b>Pounce</b> is another notorious indoor/outdoor friendly. Affectionately known as the Mayor of JP, he’s got a 
				reputation for waltzing into residents’ homes and making himself comfortable. There’s more than a handful 
				of bemused posts in the Cats of JP group archive enquiring as to the nature of the visit- does he need help?? 
				No, he’s just making the rounds.
			<br/>
			<br/>
				His (perhaps overly) friendly demeanor has earned him dozens of fans across the neighborhood, but his hunting 
				instincts have a few locals feeling miffed. 
			</p>
		</section>

		<section>
			<p>
				When asked for comment, proud cat owner and local wildlife advocate, <b>Louise R.</b> had this to say: 
				<br/>
				<br/>
				“I have mixed feelings about outdoor cats. My first cat enjoyed life outside; my second lives inside. I'm convinced 
				that most cats are happier when they can explore outside, and that if presented with the choice of having a short life 
				ended by a speeding car or fierce coyote, or a long safer life spent on a comfy chair, they would choose the former. 
				But I'm also a protector of birds and small mammals, and I hate the depredations caused by housecats. 
				<br/>
				<br/>
				One of my neighbors has a large outdoor cat, appropriately named Pounce, who roams around nearby streets and yards... 
				Many neighbors love him because he will come inside and cuddle with anyone. But outside, he's a menace. 
				<br/>
				<br/>
				When I first moved into my condo, twice I heard the heart-rending shriek of a baby rabbit in the backyard and looked out 
				to see Pounce proudly trotting off with his prey. After that, whenever I saw Pounce coming through the fence into the 
				yard, I would run after him, clapping my hands and yelling "Get out of here!" He would waddle quickly out of sight. Now, 
				I merely have to come out on my deck and as soon as he spots me, he turns tail. I still call myself a cat-lover. 
				But I'm not a Pounce-lover!”
			</p>
		</section>

		<section>
			<p>
				Louise, a friend and client of mine, isn't wrong. According to the 
				<a href="https://abcbirds.org/program/cats-indoors/cats-and-birds/">American Bird Conservancy</a>, 
				outdoor domestic cats are a very present threat to biodiversity. From their website: 
				<br/>
				<br/>
				"The ecological dangers are so critical that the International Union for Conservation of Nature (IUCN) lists 
				domestic cats as one of the world’s worst non-native invasive species."
				<br/>
				<br/>
				This issue has seen many a heated debate on the Facebook group. It's perhaps the one true fracture within the 
				community, which usually exists in a spirit of neighborly cheer. Some people feel quite strongly about their little 
				friends' right to roam, and some feel equally strongly that it's dangerous to allow them outside- both for the 
				wildlife, and for the cats themselves. 
				<br/>
				<br/>
				Even without the threat cars pose, there are coyotes and fishercats roaming Boston, and cats are not immune to 
				getting lost, trapped, or injured if exploring on their own. A new strain of bird flu has also popped up in the 
				last few months that's shown to have a nearly 100% mortality rate in cats. The choice to allow a cat outside is 
				not one to make lightly.
			</p>
		</section>

		<section>
			<p>
				What I fear gets lost in online arguments is the presence of a middle ground- both sides are so sure they're right 
				that they refuse to hear the other's valid points, in favor of stating and re-stating their own.
				<br/>
				<br/>
				But 'indoors-only cats' and 'cats with complete unsupervised outdoor access' aren't the only possible solutions to this issue. 
				<br/>
				<br/>
				One solution is allowing leashed excursions outdoors, like previous clients <b>Fifi and Mitzi</b>. Their lengthy leads 
				permit them (nearly) unfettered access to their mom's woodsy backyard and keeps them from straying too far. 
			</p>
		</section>

		<section>
			<p>
				Another is one enjoyed by the kingly <b>Pierre</b>, who has an enclosed, higher than ground-level porch to enjoy. 
				Though he's not allowed out without supervision, and his humans have installed mesh to ensure he doesn't slip between 
				the bars of the railing, his porch is an incredibly safe place for him to enjoy the outdoors. It helps that he doesn't
				seem at all interested in making a break for it, much preferring to doze in a sunbeam or watch the world go by. He 
				watches cars whizz past, enjoys the breeze, and generally luxuriates in his own personal outdoor space, unbothered
				by dogs, vehicles, and other dangers. This isn't an option for everyone- not cat owner has a porch, or a cat that won't 
				try to <i>Oceans Eleven</i> their way out of one.
			</p>
		</section>

		<section>
			<p>
				Whether yours is an indoor or outdoor cat, the most important thing is they have a loving, attentive human- one who 
				considers their safety, health, and the safety and health of the neighborhood in which they live. Be kind to your 
				cats, and be kind to each other. We are what make Jamaica Plain the community it is, and in these ever-increasingly 
				turbulent times, I'd hazard to say it does us good to remember that.
			</p>
		</section>
		
	</div>
	
</Scroller>



<style>
	/* allow ONLY the <section> tags to receive clicks, hovers, and other points events */
	[slot="foreground"] {
		pointer-events: none;
		section {
			pointer-events: all;
		}
	}
	
	/* the background image is fixed in place, so it doesn't scroll with the text */	
	[slot="background"] {
		background-color: rgb(115, 149, 207); /*cat image background color*/
		border: 2px solid #ffffff; /*cat image border color*/
		overflow: hidden; 
		padding: 1em; 
		/*position: fixed; fixes the background image in place*/
	}

			
	.background-image { /*CONTAINER/BACKGROUND*/
		margin-top: 5rem;
		padding: 1em; 
		margin-right: 8em;right: 0; /* position it on the right side of the screen */
		position: fixed;

		/*top: 50%; 
		transform: translateY(-50%); */
		width: 30rem; 
		height: 30rem;
		display: flex;
		align-items: center;
		justify-content: center;
		
		background-color: rgb(115, 149, 207);
		border: 2px solid #cec9c9;
		border-radius: 12px;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

	}

	.background-image img { /*image itself*/
		width: 31vw;
		height: 70vh;
		object-fit: cover; /*maintain aspect ratio! */
		border-radius: 12px;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
	}

	.caption {
		position: absolute;
		bottom: 0.25rem; /* position it at the bottom of the image */
		left: 1rem; /* position it at the left of the image */
		font-size: 0.75rem;
		color: black;
		background-color: rgba(255, 255, 255, 0.7); /* transparent black */
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		max-width: 90%;
	}
		
	section {
		/*background-color: rgb(195,229,220); /* light green background for the initial codign phase*/
		height: auto; /* make each scrolling "slide" 80% of the vertical screen height */
		width: 90%;
		color: rgb(0, 0, 0); /*text color*/
		margin: 0 0 0 3.5em; /* margin at the top, right, bottom, left; adds split between sections*/

		p {
			font-size: 1.13em; /*font size*/
			max-width: 90%; 
			/*background-color: rgba(14, 90, 255, 0.15); background to paragraph color*/
			
			margin-top: 3rem; /*it's 5% below the top of the section*/
			margin-left: 1rem; 
			margin-bottom: 0rem; 
			margin-right: 1rem;
			padding: 0rem;
		}
	}
</style>