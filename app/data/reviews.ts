export type Review = {
  id: string;
  name: string;
  imageUrl?: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  title?: string;
  body: string;
  source?: "google" | "yelp" | "facebook" | "other";
};

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Kim Smith",
    imageUrl: "https://placehold.co/80x80/png?text=KS",
    rating: 5,
    date: "2025-11-11",
    body: "I’ve hired Eric from Drain-Flo twice now, and each time he’s been fast, responsive, and incredibly knowledgeable. He shows up when he says he will, gets right to the root of the problem, and explains everything clearly. It’s tough to find reliable service these days, but Eric is the real deal. I’ll definitely continue using Drain-Flo and highly recommend him to anyone needing plumbing work done right!!!!",
    source: "google",
  },
  {
    id: "review-2",
    name: "Eric",
    imageUrl: "https://placehold.co/80x80/png?text=E",
    rating: 5,
    date: "2025-11-12",
    body: "Drain-Flo did a great job with fixing my broken sewer line. The team worked very well together. Professional, prompt, affordable and courteous. I will recommend them to anyone that needs sewer line service.",
    source: "google",
  },
  {
    id: "review-3",
    name: "Paige Murdock",
    imageUrl: "https://placehold.co/80x80/png?text=PM",
    rating: 5,
    date: "2025-10-07",
    body: "Eric came to my store late at night and with short notice. He quickly noticed the issue and resolved it. He was very kind and we greatly appreciate his help!!",
    source: "google",
  },
  {
    id: "review-4",
    name: "Bill Leonard",
    imageUrl: "https://placehold.co/80x80/png?text=BL",
    rating: 5,
    date: "2025-06-10",
    body: "Eric and his crew at Drain-Flo were recommended to me for some difficult plumbing work and they delivered. Great work, service, and price. Highly recommended.",
    source: "google",
  },
  {
    id: "review-5",
    name: "Pam Hart",
    imageUrl: "https://placehold.co/80x80/png?text=PH",
    rating: 5,
    date: "2025-06-03",
    body: "Excellent experience!! I had an emergency with my sump pump breaking and water in my basement. Made a phone call and Eric came quickly to fix the issue. I was so grateful for the prompt response and fast professional service!! Thank you!!! Highly recommend!!",
    source: "google",
  },
  {
    id: "review-6",
    name: "Adam Huertas",
    imageUrl: "https://placehold.co/80x80/png?text=AH",
    rating: 5,
    date: "2025-05-06",
    body: "Dedicated and passionate about plumbing and their work shows it!! They installed a shower body for me and I couldn’t have asked for a better plumber when it comes to price and quality!!!! I recommend DRAIN-FLO!!",
    source: "google",
  },
  {
    id: "review-7",
    name: "Scar",
    imageUrl: "https://placehold.co/80x80/png?text=S",
    rating: 5,
    date: "2025-05-06",
    body: "Eric is prompt, efficient and knowledgeable. They installed a new kitchen faucet and unblocked my bathtub drain. The prices were extremely reasonable. If there were 10 stars, I would give it to DRAIN FLO!!! Thank you again DRAIN FLO!!!! Oh, I already recommend them to three of my friends.",
    source: "google",
  },
  {
    id: "review-8",
    name: "Carly Tansits",
    imageUrl: "https://placehold.co/80x80/png?text=CT",
    rating: 5,
    date: "2025-06-03",
    body: "I called Drain-Flo when I had a very high water bill due to a leak I could not find. Eric showed up the same day and assessed and fixed the leak in a very short amount of time. He also pointed out other issues I didn’t know I had and was very knowledgeable. I’ll be calling them for future plumbing issues definitely.",
    source: "google",
  },
  {
    id: "review-9",
    name: "Vince Sparacino",
    imageUrl: "https://placehold.co/80x80/png?text=VS",
    rating: 5,
    date: "2025-06-03",
    body: "Eric and his team are super customer focused and experts in their craft. Give them a call!",
    source: "google",
  },
  {
    id: "review-10",
    name: "Megan R",
    imageUrl: "https://placehold.co/80x80/png?text=MR",
    rating: 5,
    date: "2025-09-16",
    body: "Professional, reliable, and a great company!",
    source: "google",
  },
  {
    id: "review-11",
    name: "Joe Mendygral",
    imageUrl: "https://placehold.co/80x80/png?text=JM",
    rating: 5,
    date: "2025-07-29",
    body: "Contacted Eric to replace a drainage pipe where my downspout runs to, replace an outdoor spigot, and put a new water shut off valve in the basement. We set a date and time for the work to be completed. Eric arrived as expected and worked diligently to complete each task. As expected, fixing things in a 65 year old house has its challenges but nothing that Eric couldn't handle. I would highly recommend Eric for anyone looking for plumbing help in the future.",
    source: "google",
  },
];
