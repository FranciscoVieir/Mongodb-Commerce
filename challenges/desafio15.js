db.produtos.updateMany({}, { $set: { avaliacao: 0 } });
db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $inc: { avaliacao: Number(5) } },
);
db.produtos.updateMany(
  { tags: { $in: ["ave"] } },
  { $inc: { avaliacao: Number(3) } },
);

db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
