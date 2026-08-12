export interface TryOnItem {
  id: string;
  name: string;
  category: string;
  price: string;
  priceNumber: number;
  date: string;
  status: 'Tried' | 'Purchased';
  tag: 'Festive' | 'Bridal' | 'Casual' | 'Party';
  feedback: string | null;
  image: string;
}

export interface CustomerProfile {
  id: string;
  name: string;
  initials: string;
  role: string;
  totalItems: number;
  conversionRate: string;
  mostTriedCategory: string;
  dateRange: string;
  phone: string;
  email: string;
  birthday: string;
  loyaltyTier: string;
  lifetimeValue: string;
  loyaltyScore: number;
  topColors: string[];
  sizes: string[];
  categorySplit: { category: string; percentage: number }[];
  occasions: string[];
  interactions: {
    type: 'whatsapp' | 'note' | 'order' | 'try-on';
    title: string;
    date: string;
    content: string;
    metadata?: string;
  }[];
}

export class CustomerService {
  getCustomerProfile(customerId: string): CustomerProfile {
    // Default Meera Reddy profile
    if (customerId === 'meera-reddy') {
      return {
        id: 'meera-reddy',
        name: 'Meera Reddy',
        initials: 'MR',
        role: 'Gold Member',
        totalItems: 12,
        conversionRate: '42%',
        mostTriedCategory: 'Saree',
        dateRange: 'Apr 23 - Feb 24',
        phone: '+91 98765 43212',
        email: 'meera.r@example.com',
        birthday: 'Born 5 December',
        loyaltyTier: 'Gold',
        lifetimeValue: '₹2,80,000',
        loyaltyScore: 92,
        topColors: ['#fbcfe8', '#fef08a', '#bbf7d0', '#fda4af', '#1e3a8a'], // Peachish Pink, Yellow/Gold, Green, Rose/Pink, Navy
        sizes: ['M', '38', 'Free Size'],
        categorySplit: [
          { category: 'Sarees', percentage: 45 },
          { category: 'Lehengas', percentage: 30 },
          { category: 'Suits', percentage: 15 },
          { category: 'Anarkalis', percentage: 5 },
        ],
        occasions: ['Wedding', 'Festive', 'Party', 'Casual'],
        interactions: [
          {
            type: 'whatsapp',
            title: 'WhatsApp Message',
            date: '20 Feb, 4:00 pm',
            content: '"Hi, do you have the red Banarasi saree in stock?"'
          },
          {
            type: 'note',
            title: 'Staff Note',
            date: '18 Feb, 7:45 pm',
            content: "Customer is looking for a bridal lehenga for her sister's wedding in May."
          },
          {
            type: 'order',
            title: 'Order #4892',
            date: '2 Nov, 10:15 pm',
            content: 'Purchased Emerald Green Silk Saree',
            metadata: '₹45,000'
          },
          {
            type: 'try-on',
            title: 'Tried Garment',
            date: '28 Oct, 4:50 pm',
            content: 'Tried on Maroon Velvet Lehenga'
          },
          {
            type: 'whatsapp',
            title: 'WhatsApp Message',
            date: '29 Oct, 2:40 pm',
            content: '"I loved the collection yesterday, will come back with my mother."'
          }
        ]
      };
    }

    // Generic fallback profiles for other customers in the list
    const nameMap: Record<string, string> = {
      'priya-sharma': 'Priya Sharma',
      'aarti-verma': 'Aarti Verma',
      'deepika-nair': 'Deepika Nair',
      'riya-desai': 'Riya Desai',
      'ananya-patel': 'Ananya Patel',
      'sneha-joshi': 'Sneha Joshi',
      'pooja-kapoor': 'Pooja Kapoor',
      'kavita-singh': 'Kavita Singh',
      'neha-gupta': 'Neha Gupta'
    };

    const initialsMap: Record<string, string> = {
      'priya-sharma': 'PS',
      'aarti-verma': 'AV',
      'deepika-nair': 'DN',
      'riya-desai': 'RD',
      'ananya-patel': 'AP',
      'sneha-joshi': 'SJ',
      'pooja-kapoor': 'PK',
      'kavita-singh': 'KS',
      'neha-gupta': 'NG'
    };

    const ltvMap: Record<string, string> = {
      'priya-sharma': '₹1,25,000',
      'aarti-verma': '₹95,000',
      'deepika-nair': '₹65,000',
      'riya-desai': '₹1,85,000',
      'ananya-patel': '₹45,000',
      'sneha-joshi': '₹32,000',
      'pooja-kapoor': '₹15,000',
      'kavita-singh': '₹12,000',
      'neha-gupta': '₹8,500'
    };

    const tierMap: Record<string, string> = {
      'priya-sharma': 'Gold',
      'aarti-verma': 'Gold',
      'deepika-nair': 'Silver',
      'riya-desai': 'Gold',
      'ananya-patel': 'Silver',
      'sneha-joshi': 'Silver',
      'pooja-kapoor': 'Bronze',
      'kavita-singh': 'Bronze',
      'neha-gupta': 'Bronze'
    };

    const phoneMap: Record<string, string> = {
      'priya-sharma': '+91 98765 43210',
      'aarti-verma': '+91 98765 43218',
      'deepika-nair': '+91 98765 43214',
      'riya-desai': '+91 98765 43216',
      'ananya-patel': '+91 98765 43211',
      'sneha-joshi': '+91 98765 43217',
      'pooja-kapoor': '+91 98765 43219',
      'kavita-singh': '+91 98765 43213',
      'neha-gupta': '+91 98765 43215'
    };

    const name = nameMap[customerId] || 'Walk-in Customer';
    const initials = initialsMap[customerId] || 'WC';
    const ltv = ltvMap[customerId] || '₹0';
    const tier = tierMap[customerId] || 'Bronze';
    const phone = phoneMap[customerId] || '+91 99999 99999';

    return {
      id: customerId,
      name,
      initials,
      role: `${tier} Member`,
      totalItems: 4,
      conversionRate: '25%',
      mostTriedCategory: 'Lehenga',
      dateRange: 'Jan 24 - Feb 24',
      phone,
      email: `${customerId}@example.com`,
      birthday: 'Born 1 January',
      loyaltyTier: tier,
      lifetimeValue: ltv,
      loyaltyScore: 65,
      topColors: ['#fda4af', '#bbf7d0'],
      sizes: ['S', '36'],
      categorySplit: [
        { category: 'Lehengas', percentage: 75 },
        { category: 'Suits', percentage: 25 }
      ],
      occasions: ['Festive', 'Party'],
      interactions: [
        {
          type: 'try-on',
          title: 'Tried Garment',
          date: '10 Feb, 3:00 pm',
          content: 'Tried on Burgundy Bridal Lehenga'
        }
      ]
    };
  }

  getCustomerTryOns(customerId: string): TryOnItem[] {
    return [
      {
        id: '1',
        name: 'Peach Silk Suit',
        category: 'Suit',
        price: '₹22,000',
        priceNumber: 22000,
        date: '5 Feb 2024',
        status: 'Tried',
        tag: 'Festive',
        feedback: 'Wants to see in different color',
        image: '/assets/8694ec05f3a23456ff91558928492562f4507e0f.png',
      },
      {
        id: '2',
        name: 'Burgundy Bridal Lehenga',
        category: 'Lehenga',
        price: '₹1,25,000',
        priceNumber: 125000,
        date: '20 Jan 2024',
        status: 'Tried',
        tag: 'Bridal',
        feedback: "Customer considering for sister's wedding",
        image: '/assets/e9bb007718b98e8efff84f8b85d88614207ed4ec.png',
      },
      {
        id: '3',
        name: 'Emerald Green Silk Saree',
        category: 'Saree',
        price: '₹42,000',
        priceNumber: 42000,
        date: '2 Nov 2023',
        status: 'Purchased',
        tag: 'Bridal',
        feedback: "Customer considering for sister's wedding",
        image: '/assets/84c6febbb3a5dca46887808d5ce61a7249deb68a.png',
      },
      {
        id: '4',
        name: 'Maroon Velvet Lehenga',
        category: 'Lehenga',
        price: '₹85,000',
        priceNumber: 85000,
        date: '28 Oct 2023',
        status: 'Tried',
        tag: 'Bridal',
        feedback: 'Customer loved the design but found it too heavy',
        image: '/assets/98353a35dc2b9e77792b6d80b28e12714ee85bba.png',
      },
      {
        id: '5',
        name: 'Mint Green Georgette Saree',
        category: 'Saree',
        price: '₹18,000',
        priceNumber: 18000,
        date: '5 Sept 2023',
        status: 'Purchased',
        tag: 'Casual',
        feedback: null,
        image: '/assets/2211e1150649c382dba986e554af9d4040568fb4.png',
      },
      {
        id: '6',
        name: 'Blush Pink Anarkali',
        category: 'Anarkali',
        price: '₹28,000',
        priceNumber: 28000,
        date: '15 Aug 2023',
        status: 'Purchased',
        tag: 'Party',
        feedback: null,
        image: '/assets/14f6f4f7fc6d8a3fc50b13e1e949cff7ccc22e63.png',
      },
      {
        id: '7',
        name: 'Navy Blue Sequin Saree',
        category: 'Saree',
        price: '₹38,000',
        priceNumber: 38000,
        date: '15 Aug 2023',
        status: 'Tried',
        tag: 'Party',
        feedback: 'Preferred lighter colors',
        image: '/assets/bf25c0f24353426bcb6166894ff721bff7cee26a.png',
      },
      {
        id: '8',
        name: 'Royal Blue Anarkali',
        category: 'Anarkali',
        price: '₹32,000',
        priceNumber: 32000,
        date: '12 Jul 2023',
        status: 'Tried',
        tag: 'Party',
        feedback: null,
        image: '/assets/e439254c5fec9ae6b8033c68184eadc3c161b327.png',
      },
      {
        id: '9',
        name: 'Coral Pink Lehenga',
        category: 'Lehenga',
        price: '₹68,000',
        priceNumber: 68000,
        date: '18 Jun 2023',
        status: 'Purchased',
        tag: 'Party',
        feedback: null,
        image: '/assets/575704098ecd913189d90e81c81944f17b83beb8.png',
      },
      {
        id: '10',
        name: 'Gold Tissue Kanjeevaram',
        category: 'Saree',
        price: '₹55,000',
        priceNumber: 55000,
        date: '10 May 2023',
        status: 'Tried',
        tag: 'Bridal',
        feedback: 'Will return for wedding season',
        image: '/assets/a496c3a5971646c930b0382ad747e609497fbf40.png',
      },
      {
        id: '11',
        name: 'Ivory Pearl Embroidered Suit',
        category: 'Suit',
        price: '₹35,000',
        priceNumber: 35000,
        date: '10 May 2023',
        status: 'Purchased',
        tag: 'Festive',
        feedback: null,
        image: '/assets/9791ae3d021ee7700ce703f7aef80f0201964f73.png',
      },
      {
        id: '12',
        name: 'Teal Banarasi Saree',
        category: 'Saree',
        price: '₹48,000',
        priceNumber: 48000,
        date: '22 Apr 2023',
        status: 'Tried',
        tag: 'Festive',
        feedback: 'Preferred gold over teal',
        image: '/assets/f76c9ec03dfcc3d11c827001c7f440f47e1e6280.png',
      },
    ];
  }

  getCustomers(): any[] {
    return [
      {
        id: 'meera-reddy',
        name: 'Meera Reddy',
        initials: 'MR',
        phone: '+91 98765 43212',
        lastPurchase: '20 Sept 2023',
        ltv: '₹2,80,000',
        tier: 'Gold',
        tryOns: 24
      },
      {
        id: 'priya-sharma',
        name: 'Priya Sharma',
        initials: 'PS',
        phone: '+91 98765 43210',
        lastPurchase: '2 Nov 2023',
        ltv: '₹1,25,000',
        tier: 'Gold',
        tryOns: 12
      },
      {
        id: 'aarti-verma',
        name: 'Aarti Verma',
        initials: 'AV',
        phone: '+91 98765 43218',
        lastPurchase: '5 Jan 2024',
        ltv: '₹95,000',
        tier: 'Gold',
        tryOns: 10
      },
      {
        id: 'deepika-nair',
        name: 'Deepika Nair',
        initials: 'DN',
        phone: '+91 98765 43214',
        lastPurchase: '10 Dec 2023',
        ltv: '₹65,000',
        tier: 'Silver',
        tryOns: 8
      },
      {
        id: 'riya-desai',
        name: 'Riya Desai',
        initials: 'RD',
        phone: '+91 98765 43216',
        lastPurchase: '18 Feb 2024',
        ltv: '₹1,85,000',
        tier: 'Gold',
        tryOns: 15
      },
      {
        id: 'ananya-patel',
        name: 'Ananya Patel',
        initials: 'AP',
        phone: '+91 98765 43211',
        lastPurchase: '15 Jan 2024',
        ltv: '₹45,000',
        tier: 'Silver',
        tryOns: 5
      },
      {
        id: 'sneha-joshi',
        name: 'Sneha Joshi',
        initials: 'SJ',
        phone: '+91 98765 43217',
        lastPurchase: '30 Oct 2023',
        ltv: '₹32,000',
        tier: 'Silver',
        tryOns: 6
      },
      {
        id: 'pooja-kapoor',
        name: 'Pooja Kapoor',
        initials: 'PK',
        phone: '+91 98765 43219',
        lastPurchase: '25 Nov 2023',
        ltv: '₹15,000',
        tier: 'Bronze',
        tryOns: 4
      },
      {
        id: 'kavita-singh',
        name: 'Kavita Singh',
        initials: 'KS',
        phone: '+91 98765 43213',
        lastPurchase: '1 Feb 2024',
        ltv: '₹12,000',
        tier: 'Bronze',
        tryOns: 3
      },
      {
        id: 'neha-gupta',
        name: 'Neha Gupta',
        initials: 'NG',
        phone: '+91 98765 43215',
        lastPurchase: '5 Aug 2023',
        ltv: '₹8,500',
        tier: 'Bronze',
        tryOns: 2
      }
    ];
  }
}
