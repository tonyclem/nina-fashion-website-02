import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const newArrivalProduct = [
  {
    id: 1,
    name: "fashion 1",
    imageUrl: "https://i.postimg.cc/W3bXnvq9/clothes-01.jpg",
    description: "lorem ipsum dolor sit amet",
    price: 100,
  },
  {
    id: 2,
    name: "nice blue",
    imageUrl: "https://i.postimg.cc/43N2zxNS/clothes-20.jpg",
    description: "lorem ipsum dolor sit amet",
    price: 100,
  },
  {
    id: 3,
    name: "african dress",
    imageUrl: "https://i.postimg.cc/CxWvKVYP/africandress.jpg",
    description: "lorem ipsum dolor sit amet",
    price: 100,
  },
  {
    id: 4,
    name: "african ways",
    imageUrl: "https://i.postimg.cc/nzdBCvBF/African-White-Dress.jpg",
    description: "lorem ipsum dolor sit amet",
    price: 100,
  },
  {
    id: 5,
    name: "fashion 2",
    imageUrl: "https://i.postimg.cc/J7kb5dwJ/africandress02.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 100,
  },
  {
    id: 6,
    name: "fashion 2",
    imageUrl: "https://i.postimg.cc/JzGBq8z1/ghana.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 100,
  },
  {
    id: 7,
    name: "fashion 2",
    imageUrl: "https://i.postimg.cc/ydSMXkwF/natural.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 100,
  },
];

export const comments = [
  {
    id: 2,
    comment: "comfortable and meet all my expections",
    more: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
    imageUrl: "https://i.postimg.cc/WbR9Z0kS/comment-02.jpg",
    name: "Adam Love",
    title: "custom",
  },
  {
    id: 3,
    comment: "comfortable and meet all my expections",
    more: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
    imageUrl: "https://i.postimg.cc/3RSs7NSV/comment-05.jpg",
    name: "Donald Asher",
    title: "custom",
  },
  {
    id: 4,
    comment: "comfortable and meet all my expections",
    more: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
    imageUrl: "https://i.postimg.cc/R03fGDrt/comment-03.jpg",
    name: "Maria St",
    title: "custom",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

export const products_url =
  "https://back-end-tested.herokuapp.com/api/products";

export const singleProductUrl = `https://back-end-tested.herokuapp.com/api/products/slug/`;

export const signInUser =
  "https://back-end-tested.herokuapp.com/api/users/signin";

export const registerUser =
  "https://back-end-tested.herokuapp.com/api/users/signup";
