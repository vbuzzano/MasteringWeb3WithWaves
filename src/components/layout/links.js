export const headerLinks = [
    {
        url: '#market',
        title: 'Market',
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
    },
    {
        url: '#company2',
        title: 'Blog',
    },
    {
        url: '#company3',
        title: 'Press',
    },
    {
        url: '#company4',
        title: 'Investor Relations',
    },
    {
        url: '#company5',
        title: 'Management Team',
    },
    {
        url: '#company6',
        title: 'In Your Community',
    },
]

export const workLinks = [
    {
        url: '#register',
        title: 'Register as Supplier',
        isEnabled: e => e.isSupplier,
    },
    {
        url: '#my/coupons',
        title: 'Use your coupons',
        isEnabled: () => false,
    },
    {
        url: '#work3',
        title: 'Learn About Groupon Merchant',
        isEnabled: () => false,
    },
    {
        url: '#work4',
        title: 'Affiliate Program',
        isEnabled: () => false,
    },
    {
        url: '#work5',
        title: 'Vendor Code of Conduct',
        isEnabled: () => false,
    },
]

export const moreLinks = [
    {
        url: '#more1',
        title: 'Customer Support',
        isEnabled: () => false,
    },
    {
        url: '#more2',
        title: 'Refund Policies',
        isEnabled: () => false,
    },
    {
        url: '#more3',
        title: 'FAQ',
        isEnabled: () => false,
    },
    {
        url: '#more4',
        title: 'Miles & Points',
        isEnabled: () => false,
    },
]

export const mainLinks = [
    ...headerLinks,
    {
        url: '#main1',
        title: 'Goods',
        isEnabled: () => false,
    },
    {
        url: '#my/coupons',
        title: 'Coupons',
        isEnabled: () => false,
    },
    {
        url: '#main3',
        title: 'Contacts',
        isEnabled: () => false,
    },
]
