
# Endpoints

## Crop endpoint

### Get crops

* GET /api/crops

### Create crop

Endpoint:

* POST /api/crops

Example:

```json
{
  name: "Köles",
  type: "sárga",
  proteinContent: 35.5,
  producerId: 2
}
```

### Update crop

* PUT /api/crops/:id

```json
{
  name: "Köles",
  type: "sárga",
  proteinContent: 35.5,
  producerId: 2
}
```

### Delete crop

* DELETE /api/crops/:id

## Producer endpoint

### Get producers

* GET /api/producers

### Create producer

* POST /api/producers

Example:

```json
{
  name: "Budapesti Kereskedelmi Kft.",
  country: "Hungary",
  yearOfFoundatin: 2000,
  capacityHectare: 1000
}
```

### Update producer

* PUT /api/producers/:id

```json
{
  name: "Budapesti Kereskedelmi Kft.",
  country: "Hungary",
  yearOfFoundatin: 2000,
  capacityHectare: 1000
}
```

### Delete producer

* DELETE /api/producers/:id
