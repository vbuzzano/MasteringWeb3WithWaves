# Mastering Web 3 Course

This repository contains all the needed UI elements to assemble Coupon Bazaar marketplace.

## How to use

1. This repository contains a few branches, explore them all
2. Open `package.json` to see all available commands.


## Final project description


Suppliers should be able to:
- **Register** – dApp should store supplier details
- **Add/remove/update coupons** – Coupon details (name, price, expiration date) should be stored in the dApp’s storage
- **Confirm or reject purchases** – Suppliers should get a request when a customer wants to buy a coupon. If supplier confirms the purchase, customer should get an NFT with a script. The script will allow to trade, use in dApp and transfer by customer, and burn by supplier. Each coupon 
- **Accept coupons from users** – Suppliers should be able to get coupon NFTs and burn them
- **Withdraw funds** – When an NFT is burnt or expired, supplier should be able to withdraw funds (NFTs price)

Customers functionality:
- **Find coupons** – users should be able to see available coupons
- **Purchase** – users should be able to buy coupons in exchange of Waves tokens only and get an NFT for each coupon. 
- **Vote for coupons to delist them of mark as featured** – Coupon owner should be able to vote for coupons using commit-reveal voting
- **Use coupons** – customers should be able to transfer an NFT to supplier (in an exchange of good or service with discount)

## Requirements

1. All functions/features of the final project should work on top of Waves blockchain. The whole marketplace should interact with one dApp.
2. Coupon Bazaar should allow to sign transactions using Waves Keeper or Waves Signer (or both)


