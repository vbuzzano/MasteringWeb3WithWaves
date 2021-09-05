/**
 * Week 5 - Task 3
 *
 * To run this test, you will need 2.017 Waves.
 *
 * get it here: https://stagenet.wavesexplorer.com/faucet
 *
 * @author: vincent/code28
 *
 */

const { exchange } = require('@waves/waves-transactions')

// STAGENET MATCHER PUBLIC KEY

const expireLapsTime = 5; // 5 seconds
let assetId = null;

async function issueToken() {  
  const scriptFile = file("week5-task3.ride").replace(
    /(let expireTimestamp = )([0-9]+)(.*\n)/,
    `$1${new Date().valueOf() + expireLapsTime * 1000}`
  );

  const tx = issue(
    {
      name: "Usual Token 2",
      quantity: 100,
      decimals: 0,
      reissuable: true,
      fee: 100000000,
      script: compile(scriptFile),
      description: "Week5/task3 Token",
    },
    accounts.issuer
  );
  await broadcast(tx);
  await waitForTx(tx.id);
  return tx.id;
};

describe("Week 5 - Task 3", () => {
  before(async () => {
    await setupAccounts({
      issuer: 201700000,
      bob: 1000000,
    });
    assetId = await issueToken()
  });

  it("Transaction should work for a laps time of 20 secondes", async () => {
    const params = {
      amount: 5,
      assetId,
      fee: 500000,
      recipient: address(accounts.bob),
    };
    let ttx = transfer(params, accounts.issuer);
    const tx = await broadcast(ttx);
    await waitForTx(tx.id);
    // console.log('Transfer before expire time successful, waiting expiration')

    await waitNBlocks(2);

    ttx = transfer(params, accounts.issuer);
    await expect(broadcast(ttx)).rejectedWith();
  });

  it("Only issuer can burn token", async () => {
    const params = {
      assetId,
      amount: 1,
      fee: 500000,
    };
    let ttx = burn(params, accounts.issuer);
    const tx = await broadcast(ttx);
    await waitForTx(tx.id);

    ttx = burn(params, accounts.bob);
    await expect(broadcast(ttx)).rejectedWith();
  });

  it("Only issuer can re-issue token", async () => {
    const params = {
      quantity: 100,
      assetId,
      reissuable: true,
      fee: 100000000,
    };
    let ttx = reissue(params, accounts.issuer);
    const tx = await broadcast(ttx);
    await waitForTx(tx.id);

    ttx = reissue(params, accounts.bob);
    await expect(broadcast(ttx)).rejectedWith();
  });

  it("Allow Exchange transactions only with Waves token", async () => {
    const sell = order(
      {
        matcherPublicKey: publicKey(accounts.issuer),
        price: 1500,
        amount: 5,
        orderType: "sell",
        amountAsset: assetId,
        priceAsset: null,
      },
      accounts.issuer
    );

    const buy = order(
      {
        matcherPublicKey: publicKey(accounts.issuer),
        price: 1500,
        amount: 2,
        orderType: "buy",
        amountAsset: assetId,
        priceAsset: null,
      },
      accounts.bob
    );

    const params = {
      order1: buy,
      order2: sell,
      price: 1500,
      amount: 2,
      fee: 700000,
      buyMatcherFee: 100000,
      sellMatcherFee: 100000,
    };

    const stx = exchange(params, accounts.issuer);
    const tx = await broadcast(stx);
    await waitForTx(tx.id);
  });
});
