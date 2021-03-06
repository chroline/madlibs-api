<div align="center">

# madlibs-api

[![Hosted on Vercel](https://badgen.net/badge/%E2%96%B2%20Hosted%20on/Vercel/black)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/chroline/madlibs-api/compare)
![chroline/madlibs-api](https://badgen.net/github/last-commit/chroline/madlibs-api/main)

API that provides fill-in-the-blank stories.

</div>

## Usage

This API provides two endpoints:

1. **`/api/random`** — obtain a random story

```shell script
curl 'https://madlibs-api.vercel.app/api/random'
```

2. **`/api/story/[title]/`** — obtain a specific story by title

```shell script
curl 'https://madlibs-api.vercel.app/api/story/A Spooky Campfire Story'
```

## Credits

`madlibs-api` is created and maintained by Cole Gawin.

> The story templates provided by this API are from [`HermanFasset/madlibz`](https://github.com/HermanFassett/madlibz) (released under MIT licensing). See [http://madlibz.herokuapp.com](http://madlibz.herokuapp.com) for more details.
