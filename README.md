# api-node

## cUrl
`
curl -X POST \
  http://localhost:3000/auth \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b933341a-4555-8bd8-e430-49439e70ade9' \
  -d '{
	"email": "rodsordi@gmail.com",
	"password": "123456"
}
'
`