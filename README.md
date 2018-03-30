<h1 align="center">
  node-wallet-api
  <br>
</h1>

<h4 align="center">
  Node.js Wallet API for the <a href="https://tron.network">Tron Protocol</a>
</h4>

<p align="center">
  <a href="#how-to-use">How to Use</a> •
  <a href="#links">Links</a> •
  <a href="http://wiki.tron.network">Wiki</a> •
  <a href="#community">Community</a>
</p>

# How to use

## Requirements

* Node v9.8.0

## Running tests

Running the tests requires an active `wallet-cli` application. 
Check out to the [readme](https://github.com/tronprotocol/wallet-cli) to get it up and running.

When there is a running `wallet-cli` application use `npm` to run the tests

```bash
> npm test
```

## Usage

Install the package

```bash
> npm install @tronprotocol/wallet-api
```

Use the HTTP Client

```javascript
import {HttpClient} from "@tronprotocol/wallet-api";

const Client = new HttpClient();

let latestBlock = await Client.getLatestBlock();
```

# Community

* [Slack](https://join.slack.com/t/tronfoundation/shared_invite/enQtMzAzNzg4NTI4NDM3LTAyZGQzMzEzMjNkNDU0ZjNkNTA4OTYyNTA5YWZmYjE3MTEyOWZhNzljNzQwODM3NDQ0OWRiMTIyMDhlYzgyOGQ)
* [Telegram](https://t.me/tronnetworkEN)

# Links

* [Website](https://tron.network/)
* [Documentation](https://github.com/tronprotocol/java-tron)
* [Blog](https://tronprotocol.github.io/tron-blog/)
* [TRON Wiki](http://wiki.tron.network/en/latest/)

# Projects

* [TRON Protocol](https://github.com/tronprotocol/protocol)
* [Wallet Client](https://github.com/tronprotocol/wallet-cli)
* [Wallet Web](https://github.com/tronprotocol/Wallet_Web)
