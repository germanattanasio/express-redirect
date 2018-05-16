# Express redirect

Express application that redirects all the requests to a new domain.

## Example

```
{domain1}/path/to/resource to
{domain2}/path/to/resource
```
Currently being used to redirect

```
https://watson-api-explorer.mybluemix.net/apis/discovery-v1 to
https://watson-api-explorer.ng.bluemix.net/apis/discovery-v1
```
`{domain2}` can be changed using the `APP_DOMAIN` environment variable.

## Getting Started

```
npm install
npm start
```

Open http://localhost:3000 in a browser


## LICENSE
MIT


