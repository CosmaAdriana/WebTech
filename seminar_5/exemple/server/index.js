import express from "express";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", router);

const array = [
  { id: 1, name: "Ionut",  age: 25 },
  { id: 2, name: "Alex",   age: 18 },
  { id: 3, name: "Mihai",  age: 13 },
  { id: 4, name: "Marcel", age: 12 },
  { id: 5, name: "Marius", age: 22 },
];

router.route("/getList").get((req, res) => {
  res.json(array);
});

router.route("/postList").post((req, res) => {
  const el = req.body;
  el.id = array.length + 1;
  array.push(el);
  res.json(el);
});

router.route("/getById/:id").get((req, res) => {
  const id = parseInt(req.params.id);
  const element = array.find(item => item.id === id);

  if (element) {
    res.json(element);
  } else {
    res.status(404).json({ message: `Elementul cu id ${id} nu există.` });
  }
});

router.route("/delete/:id").delete((req, res) => {
  const id = parseInt(req.params.id);
  const index = array.findIndex(item => item.id === id);

  if (index == -1) {
    return res.status(404).json({ message: `Elementul cu id ${id} nu există.` });
  }

  const deleted = array.splice(index, 1)[0];
  res.json({
    message: `Elementul cu id ${id} a fost șters.`,
    deleted
  });
});


const port = 8000;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
