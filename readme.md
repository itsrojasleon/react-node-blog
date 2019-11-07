<div align="center">
  <h1>React Node Application</h1>
  <p>A Simple Personal Blog</p>
</div>

<img src="https://github.com/rojasleon/react-node-blog/blob/master/example/example.gif?raw=true" width="1000" />

## Prerequisites
- [Node](https://nodejs.org/) 11.13.0 or greater
- [Npm](https://npmjs.com) 6.9.0 or greater
- [Git](https://git-scm.com/) 2.20.1 or greater

All of these must be available in your `$PATH`. To verify things are set up properly, you can run this:

```shell
node --version
npm --version
git --version
```

## Clone repo

```shell
git clone git@github.com:rojasleon/react-node-blog.git
```

## Configuration

- Install dependencies

```shell
# cd blog-server
yarn install
```

```shell
# cd blog-client
yarn install
```

- Configure your database in [mongodb.com](https://cloud.mongodb.com/)
- Create a new file `dev.js` in `/blog-server/config`
- Copy the `MONGOURI` and paste it in.

```javascript
// blog-server/config/dev.js
module.exports = {
  MONGO_URI: 'YourmongoURL'
};
```

- Run projects

```shell
# blog-server
yarn run dev
# or
npm run dev
```

```shell
# blog-client
yarn start
# or
npm start
```

## Author

[Juan Luis Rojas León](https://twitter.com/rojas_leon_)

## License
MIT