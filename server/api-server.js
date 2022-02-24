const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
var cors = require("cors");

app.use(cors());

let phones = [
  {
    id: "1",
    title: "iPhone 12",
    category: "Apple",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 909,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601684204000",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 64,
  },
  {
    id: "2",
    title: "iPhone 11",
    category: "Apple",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "white",
    price: 689,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-white-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021770073",
    screen: "4,7 inch IPS",
    processor: "A13 Bionic",
    ram: 64,
  },
  {
    id: "3",
    title: "iPhone SE",
    category: "Apple",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "red",
    price: 489,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574260374",
    screen: "4,7 inch IPS",
    processor: "A13 Bionic",
    ram: 64,
  },
  {
    id: "4",
    title: "iPhone XR",
    category: "Apple",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "white",
    price: 589,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668",
    screen: "4,7 inch IPS",
    processor: "A13 Bionic",
    ram: 64,
  },

  {
    id: "5",
    title: "Galaxy Z Fold",
    category: "Samsung",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 2009,
    image:
      "https://images.samsung.com/is/image/samsung/es-galaxy-z-fold2-f916-black-sm-f916bzkaphe-frontmysticblack-thumb-295388089?$PF_PRD_PNG$",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "6",
    title: "Galaxy Z Flip",
    category: "Samsung",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "rose gold",
    price: 1550,
    image:
      "https://images.samsung.com/is/image/samsung/es-galaxy-z-flip-5g-f707-sm-f707bznaphe-frontmysticbronze-thumb-278302892?$PF_PRD_PNG$",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "7",
    title: "Galaxy S20",
    category: "Samsung",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 729,
    image:
      "https://images.samsung.com/is/image/samsung/es-galaxy-s20-fe-g780-sm-g780fzbheub-frontcloudnavy-thumb-310836010?$PF_PRD_PNG$",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: " 8",
    title: "Galaxy Note20",
    category: "Samsung",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "green",
    price: 959,
    image:
      "https://images.samsung.com/is/image/samsung/es-galaxy-note20-n980-sm-n980fzggeub-frontmysticgreen-thumb-282458549?$PF_PRD_PNG$",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "9",
    title: "Galaxy Note0",
    category: "Samsung",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "blue",
    price: 325,
    image:
      "https://images.samsung.com/is/image/samsung/es-galaxy-note9-n960-sm-n960fzbhphe-frontblue-thumb-111944862?$PF_PRD_PNG$",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "10",
    title: "Galaxy A31",
    category: "Samsung",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 299,
    image:
      "https://images.samsung.com/is/image/samsung/es-galaxy-a31-sm-a315gzkueub-front-thumb-274630449?$PF_PRD_PNG$",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 64,
  },

  {
    id: "11",
    title: "HUAWEI P40 Pro",
    category: "Huawei",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "silver frost",
    price: 899,
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-pro/p40-pro-silver.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "12",
    title: "HUAWEI P30",
    category: "Huawei",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 599,
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30-pro/P30Pro_black.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "13",
    title: "HUAWEI Y6p",
    category: "Huawei",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "purple",
    price: 129,
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y6p/y6s-listimage-purple.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "14",
    title: "HUAWEI P Smart S",
    category: "Huawei",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 229,
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p-smart-s/midnight-black.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "15",
    title: "HUAWEI Y5p",
    category: "Huawei",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 89,
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y5p/black.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
  {
    id: "16",
    title: "OnePlus 8 Pro",
    category: "Oneplus",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 909,
    image:
      "https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8bwl6bkxqanwlpaahnodotaxo639_840_840.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 8,
  },
  {
    id: "17",
    title: "OnePlus 7T",
    category: "Oneplus",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 539,
    image:
      "https://image01.oneplus.net/ebp/202003/04/1-m00-11-92-rb8bwl5favyag4u_aaivyrse7g8326_840_840.png",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 8,
  },
  {
    id: "18",
    title: "iPhone 12 Pro",
    category: "Apple",
    description:
      "A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do.",
    color: "black",
    price: 1159,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620625000",
    screen: "4,7 inch IPS",
    processor: "A14 Bionic",
    ram: 128,
  },
];

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const phone = phones.find((p) => p.id === req.params.id);
  if (!phone) res.status(404).send("The phone with the given id was not found");
  res.send(phone);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}/phones`);
});
