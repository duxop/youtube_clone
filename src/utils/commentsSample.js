export const commentsSample = [
  { user: "user", text: "This a text1", replies: [] },
  {
    user: "user",
    text: "This a text2",
    replies: [
      {
        user: "user",
        text: "This a text3",
        replies: [],
      },
      { user: "user", text: "This a text1", replies: [] },
      { user: "user", text: "This a text1", replies: [] },
    ],
  },
  {
    user: "user",
    text: "This a text4",
    replies: [
      {
        user: "user",
        text: "This a text5",
        replies: [
          {
            user: "user",
            text: "This a text6",

            replies: [
              { user: "user", text: "This a text7", replies: [] },
              { user: "user", text: "This a text1", replies: [] },
              { user: "user", text: "This a text1", replies: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    user: "user",
    text: "This a text8",
    replies: [
      {
        user: "user",
        text: "This a text9",
        replies: [
          {
            user: "user",
            text: "This a text10",

            replies: [{ user: "user", text: "This a text11", replies: [] }],
          },
        ],
      },
    ],
  },
];
