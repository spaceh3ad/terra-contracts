# Tubbly Contracts

## Prerequisite

1. Install [LocalTerra](https://github.com/terra-money/localterra)
2. Install [Terrain](https://github.com/terra-money/terrain#terrain-new-name)
3. Launch LocalTerra
4. Deployment:

```sh
terrain deploy token --signer test
```

5. Check balance:

```sh
terrain console
terrain > await lib.balance("terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v")
{ balance: '10000' }
```
