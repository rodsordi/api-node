# api-node

## cUrl

### Autenticate
```
curl -X POST \
  http://node-api-fiap.herokuapp.com/auth \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"email": "professor@gmail.com",
	"password": "123456"
}
'
```

### Add User
```
curl -X PUT \
  http://node-api-fiap.herokuapp.com/users/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-access-token: {{token}}' \
  -d '{
	"email": "abc@gmail.com",
	"name": "abc",
	"password": "123456"
}'
```

### Get User by Id
```
curl -X GET \
  http://node-api-fiap.herokuapp.com/users/1 \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: {{token}}'
```

### Get All Users
```
curl -X GET \
  http://node-api-fiap.herokuapp.com/users \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: {{token}}'
```

### Add Product
```
curl -X PUT \
  http://node-api-fiap.herokuapp.com/products/1 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'x-access-token: {{token}}' \
  -d '{
	"name": "moto",
	"value": 5000
}'
```

### Get Product by Id
```
curl -X GET \
  http://node-api-fiap.herokuapp.com/products/1 \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: {{token}}'
```

### Get All Products
```
curl -X GET \
  http://node-api-fiap.herokuapp.com/products \
  -H 'cache-control: no-cache' \
  -H 'x-access-token: {{token}}'
```