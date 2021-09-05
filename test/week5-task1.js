/**
 * Week 5 - Task 1 : Custom Token Test
 *
 * To run this test, you will need 2.015 Waves.
 *
 *  get it here: https://stagenet.wavesexplorer.com/faucet
 *
 * @author: vincent/code28
 */

let assetId = null;

describe("Week 5 - Task 1", () => {
  before(async () => {
    await setupAccounts({
      issuer: 201500000,
    });
  });

  it("Issue usual token", async () => {
    const params = {
      name: "Usual Token 1",
      quantity: 100,
      decimals: 0,
      reissuable: true,
      fee: 100000000,
      script: "base64:AwZd0cYf",
      description: "Simple example of 'custom token'",
    };

    const stx = issue(params, accounts.issuer);
    const tx = await broadcast(stx);
    await waitForTx(tx.id);

    assetId = tx.id;

    // console.log(`Token created : ${tx.id}`)
  });

  it("Re-issue 100 more tokens", async () => {
    const params = {
      quantity: 100,
      assetId,
      reissuable: true,
      fee: 500000,
    };

    const stx = reissue(params, accounts.issuer);
    const tx = await broadcast(stx);
    await waitForTx(tx.id);

    // console.log(`Token re-issued successfully : ${tx.id}`)
  });

  it("Transfer 50 tokens to any address", async () => {
    const ttx = transfer(
      {
        amount: 50,
        assetId,
        fee: 500000,
        recipient: address(accounts.bob),
      },
      accounts.issuer
    );
    const tx = await broadcast(ttx);
    await waitForTx(tx.id);

    // console.log(`Transfer successful : ${tx.id}`)
  });

  it("Update asset script to allow only InvokeScript transactions with the token and deny all others", async () => {
    const params = {
      assetId,
      fee: 100000000,
      script:
        "base64:AwQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAF0ludm9rZVNjcmlwdFRyYW5zYWN0aW9uBAAAAAFpBQAAAAckbWF0Y2gwBgccrZLH",
    };

    const stx = setAssetScript(params, accounts.issuer);
    const tx = await broadcast(stx);
    await waitForTx(tx.id);

    // console.log(`Token script updated successfully : ${tx.id}`)
  });

  it("Re Transfer 50 tokens to any address Should failed", async () => {
    const ttx = transfer(
      {
        amount: 50,
        assetId,
        fee: 500000,
        recipient: address(accounts.issuer),
      },
      accounts.issuer
    );
    await expect(broadcast(ttx)).rejectedWith();
  });
});
