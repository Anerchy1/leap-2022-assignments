const express = require("express");
const cors = require("cors");
const { nanoid } = require("nanoid");
const bodyParser = require("body-parser");
const fs = require("fs");
const jsonParser = bodyParser.json();
const ID = nanoid();

const app = express();
app.use(cors());

const port = 8001;

const articles = [
  {
    id: nanoid(),
    imageUrl: "https://loremflickr.com/640/360",
    categoryId: 0,
    name: "Cute kittie 1.",
    category: 1,
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "Dolor laborum magna incididunt consectetur. Id reprehenderit consequat cillum culpa nisi labore in occaecat enim Lorem dolor duis incididunt proident incididunt. Nostrud nostrud aliquip voluptate incididunt dolor culpa ullamco nisi voluptate. Exercitation tempor non occaecat excepteur veniam.\nEiusmod ullamco reprehenderit id cupidatat Lorem voluptate do. Commodo dolor esse cupidatat irure amet minim duis ullamco commodo ex laborum enim id. Commodo magna et commodo. Occaecat qui id aliqua occaecat ullamco non sit duis duis reprehenderit Lorem. Velit fugiat culpa tempor esse elit.\nId eu amet reprehenderit aute velit excepteur velit veniam sit esse dolore. Velit cupidatat sunt veniam. Commodo laboris commodo deserunt mollit elit sunt in eiusmod. Fugiat consequat eu laboris cupidatat ea laboris sit ipsum ex do nisi est. Labore sint culpa pariatur ea qui ipsum ipsum ad cupidatat irure occaecat amet consectetur. Excepteur cupidatat occaecat occaecat.\nNisi proident irure incididunt sunt veniam ea nisi magna est ut dolor et laborum qui. Magna non ea tempor velit cupidatat deserunt et aute nisi sunt laborum laborum culpa. Exercitation ea non eiusmod. Sit fugiat dolore Lorem dolor in commodo aliqua ea aute incididunt proident. Occaecat quis eiusmod eu irure voluptate nulla veniam veniam deserunt ullamco labore aliquip laboris laborum esse. Do irure enim cupidatat nisi veniam anim fugiat ea tempor ullamco tempor elit mollit labore. Ex qui quis laboris est tempor qui proident nulla sunt anim incididunt in. Eiusmod est exercitation consectetur duis deserunt elit culpa reprehenderit cillum est nisi do dolor veniam.\nReprehenderit sit reprehenderit nulla. Nulla reprehenderit exercitation eu et anim anim in pariatur elit pariatur nisi Lorem aliquip qui. Aute aliqua amet nostrud proident sit ex Lorem ad dolore. Deserunt officia ad voluptate adipisicing do occaecat ex do aliqua ad id.\nIpsum do cupidatat labore. Cillum id eiusmod aliqua eiusmod minim dolor anim voluptate dolor cupidatat occaecat. Consectetur amet incididunt deserunt in excepteur veniam. Cillum irure aliqua reprehenderit eu enim irure est elit sunt esse do. Ullamco laborum incididunt amet excepteur laborum occaecat do commodo. Cillum do magna ad labore ipsum consectetur enim. Laboris commodo occaecat cillum ipsum in mollit aute Lorem labore eu.\nAmet ea ex commodo aute ipsum do do aute laborum enim commodo officia anim. Ad veniam enim mollit occaecat commodo velit Lorem quis est est reprehenderit ut duis adipisicing. Consectetur in duis esse aliquip officia sint. Enim consectetur magna laboris anim incididunt ex ut elit dolore exercitation ea do irure sunt.\nIpsum proident voluptate excepteur quis enim sit occaecat ea quis ut consectetur. Elit quis reprehenderit laboris reprehenderit enim ipsum culpa fugiat aliquip. Reprehenderit cillum eiusmod laboris qui laboris do. Culpa ipsum tempor reprehenderit laboris. Aute commodo nulla est tempor occaecat enim culpa cillum dolore ex officia magna officia esse nulla. Mollit dolore occaecat consequat quis et.\nCupidatat veniam dolore Lorem id in consequat ut enim adipisicing sit nostrud dolor enim. Est ipsum duis laboris sit excepteur cillum est laborum. Occaecat laborum do dolore labore incididunt. Laborum amet fugiat duis aliqua in. Sint do veniam do ut.\nPariatur laborum incididunt reprehenderit. Anim est aliquip pariatur sint reprehenderit do sint irure minim. Labore sunt ullamco sit eu occaecat laborum proident dolor. Adipisicing cupidatat dolore ex ea tempor cillum reprehenderit sit esse sunt. Aliqua consectetur ipsum consectetur adipisicing deserunt tempor fugiat laboris irure enim aliqua id. Ex eiusmod anim tempor. Ullamco elit laborum cupidatat irure eu Lorem ad minim est anim nulla non laborum.",
  },
  {
    id: nanoid(),
    imageUrl: "https://loremflickr.com/1080/720",
    categoryId: 1,
    name: "Cute kittie 2.",
    category: 2,
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "Dolor laborum magna incididunt consectetur. Id reprehenderit consequat cillum culpa nisi labore in occaecat enim Lorem dolor duis incididunt proident incididunt. Nostrud nostrud aliquip voluptate incididunt dolor culpa ullamco nisi voluptate. Exercitation tempor non occaecat excepteur veniam.\nEiusmod ullamco reprehenderit id cupidatat Lorem voluptate do. Commodo dolor esse cupidatat irure amet minim duis ullamco commodo ex laborum enim id. Commodo magna et commodo. Occaecat qui id aliqua occaecat ullamco non sit duis duis reprehenderit Lorem. Velit fugiat culpa tempor esse elit.\nId eu amet reprehenderit aute velit excepteur velit veniam sit esse dolore. Velit cupidatat sunt veniam. Commodo laboris commodo deserunt mollit elit sunt in eiusmod. Fugiat consequat eu laboris cupidatat ea laboris sit ipsum ex do nisi est. Labore sint culpa pariatur ea qui ipsum ipsum ad cupidatat irure occaecat amet consectetur. Excepteur cupidatat occaecat occaecat.\nNisi proident irure incididunt sunt veniam ea nisi magna est ut dolor et laborum qui. Magna non ea tempor velit cupidatat deserunt et aute nisi sunt laborum laborum culpa. Exercitation ea non eiusmod. Sit fugiat dolore Lorem dolor in commodo aliqua ea aute incididunt proident. Occaecat quis eiusmod eu irure voluptate nulla veniam veniam deserunt ullamco labore aliquip laboris laborum esse. Do irure enim cupidatat nisi veniam anim fugiat ea tempor ullamco tempor elit mollit labore. Ex qui quis laboris est tempor qui proident nulla sunt anim incididunt in. Eiusmod est exercitation consectetur duis deserunt elit culpa reprehenderit cillum est nisi do dolor veniam.\nReprehenderit sit reprehenderit nulla. Nulla reprehenderit exercitation eu et anim anim in pariatur elit pariatur nisi Lorem aliquip qui. Aute aliqua amet nostrud proident sit ex Lorem ad dolore. Deserunt officia ad voluptate adipisicing do occaecat ex do aliqua ad id.\nIpsum do cupidatat labore. Cillum id eiusmod aliqua eiusmod minim dolor anim voluptate dolor cupidatat occaecat. Consectetur amet incididunt deserunt in excepteur veniam. Cillum irure aliqua reprehenderit eu enim irure est elit sunt esse do. Ullamco laborum incididunt amet excepteur laborum occaecat do commodo. Cillum do magna ad labore ipsum consectetur enim. Laboris commodo occaecat cillum ipsum in mollit aute Lorem labore eu.\nAmet ea ex commodo aute ipsum do do aute laborum enim commodo officia anim. Ad veniam enim mollit occaecat commodo velit Lorem quis est est reprehenderit ut duis adipisicing. Consectetur in duis esse aliquip officia sint. Enim consectetur magna laboris anim incididunt ex ut elit dolore exercitation ea do irure sunt.\nIpsum proident voluptate excepteur quis enim sit occaecat ea quis ut consectetur. Elit quis reprehenderit laboris reprehenderit enim ipsum culpa fugiat aliquip. Reprehenderit cillum eiusmod laboris qui laboris do. Culpa ipsum tempor reprehenderit laboris. Aute commodo nulla est tempor occaecat enim culpa cillum dolore ex officia magna officia esse nulla. Mollit dolore occaecat consequat quis et.\nCupidatat veniam dolore Lorem id in consequat ut enim adipisicing sit nostrud dolor enim. Est ipsum duis laboris sit excepteur cillum est laborum. Occaecat laborum do dolore labore incididunt. Laborum amet fugiat duis aliqua in. Sint do veniam do ut.\nPariatur laborum incididunt reprehenderit. Anim est aliquip pariatur sint reprehenderit do sint irure minim. Labore sunt ullamco sit eu occaecat laborum proident dolor. Adipisicing cupidatat dolore ex ea tempor cillum reprehenderit sit esse sunt. Aliqua consectetur ipsum consectetur adipisicing deserunt tempor fugiat laboris irure enim aliqua id. Ex eiusmod anim tempor. Ullamco elit laborum cupidatat irure eu Lorem ad minim est anim nulla non laborum.",
  },
  {
    id: nanoid(),
    imageUrl: "https://loremflickr.com/1080/720",
    categoryId: 1,
    name: "Cute kittie 3.",
    category: 2,
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "Dolor laborum magna incididunt consectetur. Id reprehenderit consequat cillum culpa nisi labore in occaecat enim Lorem dolor duis incididunt proident incididunt. Nostrud nostrud aliquip voluptate incididunt dolor culpa ullamco nisi voluptate. Exercitation tempor non occaecat excepteur veniam.\nEiusmod ullamco reprehenderit id cupidatat Lorem voluptate do. Commodo dolor esse cupidatat irure amet minim duis ullamco commodo ex laborum enim id. Commodo magna et commodo. Occaecat qui id aliqua occaecat ullamco non sit duis duis reprehenderit Lorem. Velit fugiat culpa tempor esse elit.\nId eu amet reprehenderit aute velit excepteur velit veniam sit esse dolore. Velit cupidatat sunt veniam. Commodo laboris commodo deserunt mollit elit sunt in eiusmod. Fugiat consequat eu laboris cupidatat ea laboris sit ipsum ex do nisi est. Labore sint culpa pariatur ea qui ipsum ipsum ad cupidatat irure occaecat amet consectetur. Excepteur cupidatat occaecat occaecat.\nNisi proident irure incididunt sunt veniam ea nisi magna est ut dolor et laborum qui. Magna non ea tempor velit cupidatat deserunt et aute nisi sunt laborum laborum culpa. Exercitation ea non eiusmod. Sit fugiat dolore Lorem dolor in commodo aliqua ea aute incididunt proident. Occaecat quis eiusmod eu irure voluptate nulla veniam veniam deserunt ullamco labore aliquip laboris laborum esse. Do irure enim cupidatat nisi veniam anim fugiat ea tempor ullamco tempor elit mollit labore. Ex qui quis laboris est tempor qui proident nulla sunt anim incididunt in. Eiusmod est exercitation consectetur duis deserunt elit culpa reprehenderit cillum est nisi do dolor veniam.\nReprehenderit sit reprehenderit nulla. Nulla reprehenderit exercitation eu et anim anim in pariatur elit pariatur nisi Lorem aliquip qui. Aute aliqua amet nostrud proident sit ex Lorem ad dolore. Deserunt officia ad voluptate adipisicing do occaecat ex do aliqua ad id.\nIpsum do cupidatat labore. Cillum id eiusmod aliqua eiusmod minim dolor anim voluptate dolor cupidatat occaecat. Consectetur amet incididunt deserunt in excepteur veniam. Cillum irure aliqua reprehenderit eu enim irure est elit sunt esse do. Ullamco laborum incididunt amet excepteur laborum occaecat do commodo. Cillum do magna ad labore ipsum consectetur enim. Laboris commodo occaecat cillum ipsum in mollit aute Lorem labore eu.\nAmet ea ex commodo aute ipsum do do aute laborum enim commodo officia anim. Ad veniam enim mollit occaecat commodo velit Lorem quis est est reprehenderit ut duis adipisicing. Consectetur in duis esse aliquip officia sint. Enim consectetur magna laboris anim incididunt ex ut elit dolore exercitation ea do irure sunt.\nIpsum proident voluptate excepteur quis enim sit occaecat ea quis ut consectetur. Elit quis reprehenderit laboris reprehenderit enim ipsum culpa fugiat aliquip. Reprehenderit cillum eiusmod laboris qui laboris do. Culpa ipsum tempor reprehenderit laboris. Aute commodo nulla est tempor occaecat enim culpa cillum dolore ex officia magna officia esse nulla. Mollit dolore occaecat consequat quis et.\nCupidatat veniam dolore Lorem id in consequat ut enim adipisicing sit nostrud dolor enim. Est ipsum duis laboris sit excepteur cillum est laborum. Occaecat laborum do dolore labore incididunt. Laborum amet fugiat duis aliqua in. Sint do veniam do ut.\nPariatur laborum incididunt reprehenderit. Anim est aliquip pariatur sint reprehenderit do sint irure minim. Labore sunt ullamco sit eu occaecat laborum proident dolor. Adipisicing cupidatat dolore ex ea tempor cillum reprehenderit sit esse sunt. Aliqua consectetur ipsum consectetur adipisicing deserunt tempor fugiat laboris irure enim aliqua id. Ex eiusmod anim tempor. Ullamco elit laborum cupidatat irure eu Lorem ad minim est anim nulla non laborum.",
  },
  {
    id: nanoid(),
    imageUrl: "https://loremflickr.com/1080/720",
    categoryId: 1,
    name: "Cute kittie 4.",
    category: 2,
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "Dolor laborum magna incididunt consectetur. Id reprehenderit consequat cillum culpa nisi labore in occaecat enim Lorem dolor duis incididunt proident incididunt. Nostrud nostrud aliquip voluptate incididunt dolor culpa ullamco nisi voluptate. Exercitation tempor non occaecat excepteur veniam.\nEiusmod ullamco reprehenderit id cupidatat Lorem voluptate do. Commodo dolor esse cupidatat irure amet minim duis ullamco commodo ex laborum enim id. Commodo magna et commodo. Occaecat qui id aliqua occaecat ullamco non sit duis duis reprehenderit Lorem. Velit fugiat culpa tempor esse elit.\nId eu amet reprehenderit aute velit excepteur velit veniam sit esse dolore. Velit cupidatat sunt veniam. Commodo laboris commodo deserunt mollit elit sunt in eiusmod. Fugiat consequat eu laboris cupidatat ea laboris sit ipsum ex do nisi est. Labore sint culpa pariatur ea qui ipsum ipsum ad cupidatat irure occaecat amet consectetur. Excepteur cupidatat occaecat occaecat.\nNisi proident irure incididunt sunt veniam ea nisi magna est ut dolor et laborum qui. Magna non ea tempor velit cupidatat deserunt et aute nisi sunt laborum laborum culpa. Exercitation ea non eiusmod. Sit fugiat dolore Lorem dolor in commodo aliqua ea aute incididunt proident. Occaecat quis eiusmod eu irure voluptate nulla veniam veniam deserunt ullamco labore aliquip laboris laborum esse. Do irure enim cupidatat nisi veniam anim fugiat ea tempor ullamco tempor elit mollit labore. Ex qui quis laboris est tempor qui proident nulla sunt anim incididunt in. Eiusmod est exercitation consectetur duis deserunt elit culpa reprehenderit cillum est nisi do dolor veniam.\nReprehenderit sit reprehenderit nulla. Nulla reprehenderit exercitation eu et anim anim in pariatur elit pariatur nisi Lorem aliquip qui. Aute aliqua amet nostrud proident sit ex Lorem ad dolore. Deserunt officia ad voluptate adipisicing do occaecat ex do aliqua ad id.\nIpsum do cupidatat labore. Cillum id eiusmod aliqua eiusmod minim dolor anim voluptate dolor cupidatat occaecat. Consectetur amet incididunt deserunt in excepteur veniam. Cillum irure aliqua reprehenderit eu enim irure est elit sunt esse do. Ullamco laborum incididunt amet excepteur laborum occaecat do commodo. Cillum do magna ad labore ipsum consectetur enim. Laboris commodo occaecat cillum ipsum in mollit aute Lorem labore eu.\nAmet ea ex commodo aute ipsum do do aute laborum enim commodo officia anim. Ad veniam enim mollit occaecat commodo velit Lorem quis est est reprehenderit ut duis adipisicing. Consectetur in duis esse aliquip officia sint. Enim consectetur magna laboris anim incididunt ex ut elit dolore exercitation ea do irure sunt.\nIpsum proident voluptate excepteur quis enim sit occaecat ea quis ut consectetur. Elit quis reprehenderit laboris reprehenderit enim ipsum culpa fugiat aliquip. Reprehenderit cillum eiusmod laboris qui laboris do. Culpa ipsum tempor reprehenderit laboris. Aute commodo nulla est tempor occaecat enim culpa cillum dolore ex officia magna officia esse nulla. Mollit dolore occaecat consequat quis et.\nCupidatat veniam dolore Lorem id in consequat ut enim adipisicing sit nostrud dolor enim. Est ipsum duis laboris sit excepteur cillum est laborum. Occaecat laborum do dolore labore incididunt. Laborum amet fugiat duis aliqua in. Sint do veniam do ut.\nPariatur laborum incididunt reprehenderit. Anim est aliquip pariatur sint reprehenderit do sint irure minim. Labore sunt ullamco sit eu occaecat laborum proident dolor. Adipisicing cupidatat dolore ex ea tempor cillum reprehenderit sit esse sunt. Aliqua consectetur ipsum consectetur adipisicing deserunt tempor fugiat laboris irure enim aliqua id. Ex eiusmod anim tempor. Ullamco elit laborum cupidatat irure eu Lorem ad minim est anim nulla non laborum.",
  },
];
let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf-8"));

const nextCatId = categories.length;

const updateCategoriesFile = () => {
  fs.writeFileSync("categoryData.json", JSON.stringify(categories));
};
app.get("/", (req, res) => {
  res.json(categories);
});
app.get("/categories", (request, response) => {
  response.status(200);
  response.json(categories);
});
app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const filteredCate = categories.filter((category) => {
    return category.id === Number(id);
  });
  res.json(filteredCate);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => row.id !== id);
  updateCategoriesFile();
  res.json(id);
});

app.post("/categories", jsonParser, (req, res) => {
  const { name, description } = req.body;
  const newCategory = { id: nextCatId++, name, description };
  categories.push(newCategory);
  updateCategoriesFile();
  res.send(newCategory);
});
app.put("/categories/:id", jsonParser, (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  let updatedCat;
  categories = categories.map((cat) => {
    if (cat.id === Number(id)) {
      updatedCat = { id: Number(id), name, description };
      return updatedCat;
    }
    return cat;
  });
  updateCategoriesFile();
  res.json(updatedCat);
});
app.get("/articles", (request, response) => {
  response.status(200);
  response.json(articles);
});
app.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  let result;
  for (art of articles) {
    if (art.id === id) {
      result = art;
    }
  }
  res.json(result);
});

let products = JSON.parse(fs.readFileSync("MockData.json", "utf-8"));

app.get("/products", jsonParser, (req, res) => {
  let { pageSize, page, priceFrom, priceTo, q } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  let start, end;
  start = (page - 1) * pageSize;
  end = page * pageSize;

  const items = products.slice(start, end);

  res.json({
    total: products.length,
    totalPage: Math.ceil(products.length / pageSize),
    page,
    pageSize,
    items,
  });
});
app.put("/products/:page", (req, res) => {
  let { pageSize, page, priceFrom, priceTo, q } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  let start, end;
  start = (page - 1) * pageSize;
  end = page * pageSize;

  const items = products.slice(start, end);

  res.json({
    total: products.length,
    totalPage: Math.ceil(products.length / pageSize),
    page,
    pageSize,
    items,
  });
});
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const filteredProduct = products.filter((product) => {
    return product.id === Number(id);
  });
  res.json(filteredProduct);
});

let menuPositions = JSON.parse(fs.readFileSync("menuPositions.json", "utf-8"));
app.get("/menu-positions", (req, res) => {
  res.json(menuPositions);
});
app.get("/menu-positions/:id", (req, res) => {
  const { id } = req.params;
  let position = null;

  for (const row of menuPositions) {
    if (id == row.id) {
      position = row;
      break;
    }
  }
  res.json(position);
});

let nexPosId = menuPositions.length + 1;

app.post("/menu-positions", jsonParser, (req, res) => {
  const { name, alias } = req.body;
  const newPosition = { id: nexPosId++, name, alias };
  menuPositions.push(newPosition);
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(newPosition);
});
app.delete("/menu-positions/:id", (req, res) => {
  const { id } = req.params;
  menuPositions = menuPositions.filter((row) => row.id !== Number(id));
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(id);
});

app.put("/menu-positions/:id", jsonParser, (req, res) => {
  const { name, alias } = req.body;
  const { id } = req.params;

  let updatedPos;
  menuPositions = menuPositions.map((posi) => {
    if (posi.id === Number(id)) {
      updatedPos = { id: Number(id), name, alias };
      return updatedPos;
    }
    return posi;
  });
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(updatedPos);
});

let menus = JSON.parse(fs.readFileSync("menus.json", "utf-8"));

app.get("/menus", (req, res) => {
  const { positionId } = req.query;
  if (!positionId)
    return res.statusCode(400).json("PositionId required! ma homeboy");

  const result = menus.filter((menu) => {
    return menu.positionId === Number(positionId);
  });
  return res.json(result);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
