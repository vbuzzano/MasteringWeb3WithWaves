export const headerLinks = [
    {
        url: '#featured',
        title: 'Featured',
        isEnabled: () => true,
    },
    {
        url: '#market',
        title: 'Market',
        isEnabled: () => false,
    },
    {
        url: '#my',
        title: 'My Coupons',
        isEnabled: () => true,
    },
    {
        url: '#supplier',
        title: 'Supplier',
        isEnabled: () => true,
    },
]

export const userLinks = []

export const companyLinks = [
    {
        url: '#company1',
        title: 'About',
        isEnabled: () => true,
    },
    {
        url: '#company2',
        title: 'Blog',
        isEnabled: () => true,
    },
    {
        url: '#company3',
        title: 'Press',
        isEnabled: () => true,
    },
    {
        url: '#company4',
        title: 'Investor Relations',
        isEnabled: () => true,
    },
    {
        url: '#company5',
        title: 'Management Team',
        isEnabled: () => true,
    },
    {
        url: '#company6',
        title: 'In Your Community',
        isEnabled: () => true,
    },
    {
        url: '#main3',
        title: 'Contacts',
        isEnabled: () => true,
    },
]

export const supplierLinks = [
    {
        url: '#supplier',
        title: 'Register as Supplier',
        isEnabled: e => !e.isSupplier,
    },
    {
        url: '#supplier/manage',
        title: 'Manage Coupons',
        isEnabled: e => e.isSupplier,
    },
    {
        url: '#supplier/withdraw',
        title: 'Withdraw Funds',
        isEnabled: e => e.isSupplier,
    },
    {
        url: '#supplier/history',
        title: 'Sales History',
        isEnabled: e => e.isSupplier,
    },
]

export const myLinks = [
    {
        url: '#my/coupons',
        title: 'Use your coupons',
        isEnabled: () => true,
    },
    {
        url: '#my/voting',
        title: 'Vote for your preferred coupon',
        isEnabled: () => true,
    },
    {
        url: '#my/used',
        title: 'See your used coupons',
        isEnabled: () => true,
    },
    {
        url: '#my/expired',
        title: 'See your expired Coupons',
        isEnabled: () => true,
    },
    {
        url: '#my/purchases',
        title: 'Purchases History',
        isEnabled: () => true,
    },
    {
        url: '#refund',
        title: 'Refund Policies',
        isEnabled: () => true,
    },
    {
        url: '#faq',
        title: 'FAQ',
        isEnabled: () => true,
    },
]

export const mainLinks = [
    {
        url: '#featured',
        title: 'Featured  Coupons',
        isEnabled: () => true,
    },
    {
        url: '#delisted',
        title: 'Delisted  Coupons',
        isEnabled: () => true,
    },
    {
        url: '#expired',
        title: 'Expired Coupons',
        isEnabled: () => true,
    },
    {
        url: '#miles',
        title: 'Miles & Points',
        isEnabled: () => true,
    },
    {
        url: '#support',
        title: 'Customer Support',
        isEnabled: () => true,
    },
]
