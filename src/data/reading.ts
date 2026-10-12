export type Book = {
  title: string;
  author: string;
  state: "now" | "rereading" | "queued" | "finished";
};

export const READING: Book[] = [
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    state: "rereading",
  },
  {
    title: "A Random Walk Down WallStreet",
    author: "Burton G. Malkiel",
    state: "now",
  },
  { title: "April 2026 Rhapsody", author: "Chris Oyakilome", state: "now" },
  // { title: "Shape Up", author: "Ryan Singer", state: "finished" },
  // { title: "A Philosophy of Software Design", author: "John Ousterhout", state: "finished" },
  { title: "Sell Like Crazy", author: "Suby Sabri", state: "finished" },
  { title: "Things Fall Apart", author: "Chinua Achebe", state: "finished" },
  // { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", state: "finished" },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    state: "queued",
  },
  {
    title: "System Design Interview: An Insider's guide",
    author: "Alex Xu",
    state: "queued",
  },
  {
    title: "The Prosperity Paradox",
    author: "Clayton M. Christensen",
    state: "queued",
  },
];

export const GROUP_LABELS: Record<Book["state"], string> = {
  now: "Currently",
  rereading: "Rereading",
  queued: "On the shelf",
  finished: "Finished, recently",
};
