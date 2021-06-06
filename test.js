import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';

const signer = new Signer({
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new ProviderWeb('https://testnet.waves.exchange/signer/'))

console.log(signer);

console.log("Hello")