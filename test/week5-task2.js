/**
 * Week 5 - Task 2
 * 
 * To run this test, you will need 2.009 Waves.
 * 
 * get it here: https://stagenet.wavesexplorer.com/faucet
 *
 * @author: vincent/code28
 */

let assetId = null;

const recreateTokenFromTask1 = async () => {
  const params = {
    name: "Usual Token 1",
    quantity: 100,
    decimals: 0,
    reissuable: true,
    fee: 100000000,
    script: "base64:AwZd0cYf",
    description: "Simple example of 'custom token'",
  };

  const tx = issue(params, accounts.issuer);
  await broadcast(tx);
  await waitForTx(tx.id);

  return tx.id;
};

describe("Week 5 - Task 2", () => {
  before(async () => {

    await setupAccounts({
      issuer: 100900000,
      dApp: 100000000,
    });
    
    // re create Token from task 1
    assetId = await recreateTokenFromTask1();

    // Load ride file, change ASSETID 
    const scriptFile = file("week5-task2.ride").replace(
      /(let ASSETID = ")(.*)(".*\n)/,
      `$1${assetId}$3`
    );
    const script = compile(scriptFile);
    const ssTx = setScript({ script }, accounts.dApp);
    const tx = await broadcast(ssTx);
    await waitForTx(tx.id);
  });

  it("Call function which accepts a token from Task 1 and saves caller address in dApp storage ", async () => {
    const params = {
      dApp: address(accounts.dApp),
      call: {
        function: "deposit",
      },
      payment: [
        {
          amount: 10,
          assetId,
        },
      ],
      fee: 900000,
    };
    const tx = invokeScript(params, accounts.issuer);
    await broadcast(tx);
    await waitForTx(tx.id);
    // console.debug(`Deposit done -> ${tx.id}`)
  });
});
