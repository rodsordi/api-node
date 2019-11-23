# api-node

## cUrl
`
curl -X POST \
  http://node-api-fiap.herokuapp.com//auth \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 80588401-def9-7c9d-6e09-7d269a5d467a' \
  -d '{
	"email": "rodsordi@gmail.com",
	"password": "123456"
}
'
`