# api-node

## cUrl
```
curl -X POST \
  http://node-api-fiap.herokuapp.com/auth \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 30b582e6-c806-21e9-8ecb-c0f04b35ec37' \
  -d '{
	"email": "rodsordi@gmail.com",
	"password": "123456"
}
'
```