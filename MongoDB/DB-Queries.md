# 🚀 MongoDB Complete Notes (MERN Backend Ready)

---

# 📁 Setup

```bash
c://data/db
```

---

# 🟢 DATABASE COMMANDS

## 1. Create / Switch Database

```js
use database_name
```

## 2. Show Databases

```js
show dbs
```

⚠️ Shows only **non-empty databases**

## 3. Create Collection

```js
db.createCollection("collection_name")
```

```js
db.createCollection("collection-name",{capped:true,size:1024*1024},{autoIndexId:true})
```

## 4. Show Collections

```js
show collections
```

---

# 🟡 CRUD OPERATIONS

## 🔹 INSERT

```js
db.collection.insertOne({ name: "ravi", age: 20 })

db.collection.insertMany([
  { name: "ravi", age: 20 },
  { name: "abhi", age: 22 }
])
```

---

## 🔹 READ

```js
db.collection.findOne()

db.collection.find()

db.collection.find({ name: "ravi" })
```

---

## 🔹 UPDATE

```js
db.collection.updateOne(filter, update)

db.collection.updateMany(filter, update)
```

### Examples

```js
db.users.updateOne(
  { name: "abhi" },
  { $set: { age: 20 } }
)

db.users.updateMany(
  { name: "abhi" },
  { $set: { age: 20 } }
)
```

### Remove Field

```js
db.users.updateOne(
  { name: "abhi" },
  { $unset: { age: "" } }
)
```

### Add Field if Missing

```js
db.users.updateMany(
  { id: { $exists: false } },
  { $set: { id: 1 } }
)
```

---

## 🔹 REPLACE

```js
db.collection.replaceOne(
  { name: "abhi" },
  { name: "abhi", age: 20 }
)
```

⚠️ Replaces **entire document** (removes other fields)

---

## 🔹 DELETE

```js
db.collection.deleteOne({ name: "abhi" })

db.collection.deleteMany({ age: { $lt: 18 } })
```

---

# 🟣 DATATYPES

```js
{
  name: "string",
  age: 20,
  isStudent: true,
  courses: ["math", "science"],
  address: {
    city: "hyderabad",
    state: "telangana"
  },
  createdAt: new Date()
}
```

---

# 🔵 SORT & LIMIT

```js
db.collection.find().sort({ age: 1 })   // ascending

db.collection.find().sort({ age: -1 })  // descending

db.collection.find().limit(5)

db.collection.find().sort({ age: 1 }).limit(5)
```

---

# 🟠 FIND WITH QUERY & PROJECTION

```js
db.collection.find(query, projection)
```

### Examples

```js
db.users.find({ age: { $gt: 18 } })

db.users.find({}, { name: 1, _id: 0 })
```

👉 Used to hide fields like passwords

---

# 🔴 OPERATORS

## 1. Comparison

```js
$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin
$exists
```

Example:

```js
db.users.find({ age: { $gte: 18, $lt: 25 } })
```

---

## 2. Logical

```js
$and
$or
$not
$nor
```

Examples:

```js
db.users.find({
  $and: [
    { age: { $lte: 18 } },
    { city: "mumbai" }
  ]
})

db.users.find({
  age: { $not: { $lte: 18 } }
})

db.users.find({
  $nor: [
    { age: { $lte: 18 } },
    { city: "mumbai" }
  ]
})
```

---

## 3. Element

```js
$exists
$type
```

```js
db.users.find({ age: { $exists: true } })

db.users.find({ age: { $type: "number" } })
```

---

# 🟢 INDEXES

```js
db.collection.createIndex({ age: 1 })

db.collection.getIndexes()

db.collection.dropIndex({ age: 1 })

db.collection.dropIndexes()
```

### 📌 Use:

* Speeds up queries

### ⚠️ Note:

* Too many indexes → slow writes

---

# 🟡 ADVANCED (IMPORTANT FOR MERN)

## 🔹 Nested Queries

```js
db.users.find({ "address.city": "hyderabad" })
```

---

## 🔹 Array Queries

```js
db.users.find({ courses: "math" })

db.users.find({
  courses: { $all: ["math", "science"] }
})
```

---

## 🔹 Advanced Update Operators

```js
$inc
$push
$pull
$addToSet
```

### Examples

```js
db.users.updateOne(
  { name: "ravi" },
  { $inc: { age: 1 } }
)

db.users.updateOne(
  { name: "ravi" },
  { $push: { courses: "AI" } }
)

db.users.updateOne(
  { name: "ravi" },
  { $pull: { courses: "math" } }
)

db.users.updateOne(
  { name: "ravi" },
  { $addToSet: { courses: "AI" } }
)
```

---

# 🔥 AGGREGATION (VERY IMPORTANT)

```js
db.users.aggregate([
  { $match: { age: { $gt: 18 } } },
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 }
    }
  }
])
```

### Used for:

* analytics
* reports
* dashboards

---

# 🟣 PAGINATION

```js
db.users.find().skip(10).limit(5)
```

---

# 🔵 TEXT SEARCH

```js
db.users.createIndex({ name: "text" })

db.users.find({ $text: { $search: "ravi" } })
```

---

# 🟠 SCHEMA DESIGN (IMPORTANT)

## Embedding

```js
{
  name: "ravi",
  address: {
    city: "hyd"
  }
}
```

## Referencing

```js
{
  userId: ObjectId("...")
}
```

### 📌 Rule:

* Small data → embed
* Large / reusable → reference

---

# 🔴 MONGOOSE (MERN CORE)

Use Mongoose in Node.js

```js
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const User = mongoose.model("User", userSchema)
```

