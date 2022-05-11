module.exports = ({ wallets, refs, config, client }) => ({
  balance: (address) => client.query("token", { balance: { address } }),
  transfer: (recipient, amount, signer = wallets.test1) =>
    client.execute(signer, "token", {
      transfer: { recipient, amount },
    }),
  burn: (from, amount, signer = wallets.test1) =>
    client.execute(signer, "token", {
      burn: { from, amount },
    }),
});
