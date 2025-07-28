import { 
  users, 
  type User, 
  type InsertUser, 
  services, 
  type Service, 
  type InsertService,
  products,
  type Product,
  type InsertProduct,
  testimonials,
  type Testimonial,
  type InsertTestimonial,
  bookings,
  type Booking,
  type InsertBooking,
  inquiries,
  type Inquiry,
  type InsertInquiry
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services
  getAllServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Products
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private servicesMap: Map<number, Service>;
  private productsMap: Map<number, Product>;
  private testimonialsMap: Map<number, Testimonial>;
  private bookingsMap: Map<number, Booking>;
  private inquiriesMap: Map<number, Inquiry>;
  
  private currentUserId: number;
  private currentServiceId: number;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentBookingId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.servicesMap = new Map();
    this.productsMap = new Map();
    this.testimonialsMap = new Map();
    this.bookingsMap = new Map();
    this.inquiriesMap = new Map();
    
    this.currentUserId = 1;
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentBookingId = 1;
    this.currentInquiryId = 1;
    
    // Initialize with sample data
    this.initializeServices();
    this.initializeProducts();
    this.initializeTestimonials();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.servicesMap.values());
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.servicesMap.get(id);
  }
  
  async createService(service: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const newService: Service = { ...service, id };
    this.servicesMap.set(id, newService);
    return newService;
  }
  
  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.productsMap.values());
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    return this.productsMap.get(id);
  }
  
  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const newProduct: Product = { ...product, id };
    this.productsMap.set(id, newProduct);
    return newProduct;
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonialsMap.values());
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonialsMap.get(id);
  }
  
  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonialsMap.set(id, newTestimonial);
    return newTestimonial;
  }
  
  // Booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const createdAt = new Date();
    const newBooking: Booking = { 
      id,
      name: booking.name,
      email: booking.email,
      phone: booking.phone || null,
      service: booking.service,
      date: booking.date,
      time: booking.time,
      message: booking.message || null,
      created_at: createdAt
    };
    this.bookingsMap.set(id, newBooking);
    return newBooking;
  }
  
  // Inquiry methods
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const createdAt = new Date();
    const newInquiry: Inquiry = { ...inquiry, id, created_at: createdAt };
    this.inquiriesMap.set(id, newInquiry);
    return newInquiry;
  }
  
  // Initialize with sample data
  private initializeServices() {
    
    const services: InsertService[] = [
      {
        name: "Sound Healing",
        description: "Stressed? Overwhelmed? Let Sound Healing Guide You Back to Peace. Life's chaotic enough – finding peace shouldn't be. At Meraki, we use the gentle power of sound to help you relax, recharge, and rediscover your balance. No complex techniques, just lie back and let the healing vibrations work their magic.",
        image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "60-90 minutes"
      },
      {
        name: "Crystal Healing",
        description: "Feeling Drained? Unbalanced? Life's energy can get scattered and depleted – finding your balance shouldn't be complicated. At Meraki, we use the natural power of crystals to help you realign, recharge, and restore your natural state of wellbeing. No complex rituals, just pure crystal energy working its natural magic.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "60-90 minutes"
      },
      {
        name: "Life Coaching",
        description: "Feeling Stuck? Uncertain? Life's big questions shouldn't keep you awake at night. At Meraki, we help you transform confusion into clarity, dreams into plans, and obstacles into stepping stones. No judgment, no cookie-cutter solutions – just genuine guidance to help you create the life you want.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "60-90 minutes"
      },
      {
        name: "Numerology",
        description: "Searching for Life's Hidden Patterns? Let Numbers Illuminate Your Path. Ever wondered why certain numbers keep appearing in your life? At Meraki, we decode the ancient wisdom of numbers to reveal your life's purpose, natural talents, and upcoming opportunities. No complex math needed – just clear insights based on your personal numbers.",
        image: "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "60-90 minutes"
      },
      {
        name: "Fingerprint Analysis",
        description: "Curious About Your True Potential? Let Your Fingerprints Reveal Your Life Purpose. Ever wondered why you're drawn to certain paths in life? Your fingerprints hold the key. At Meraki, we unlock the ancient wisdom hidden in your unique fingerprint patterns to reveal your life purpose, natural talents, and authentic path.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "45-60 minutes"
      },
      {
        name: "Counseling Therapy",
        description: "Need Someone to Talk To? Life's challenges can feel overwhelming, but you don't have to face them alone. At Meraki, we provide a safe, non-judgmental space where you can explore your feelings, heal from past experiences, and build a stronger, more resilient you.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "50-75 minutes"
      },
       {
        name: "doTERRA Essential Oils",
        description: "Ready to Transform Your Wellbeing Naturally? Looking for natural solutions for your daily wellness? At Meraki, we bring you doTERRA's pure, potent essential oils to support your body, mind, and spirit. No complicated protocols – just pure, natural solutions that work.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "45-90 minutes"
      }
    ];
    
    services.forEach(service => {
      this.createService(service);
    });
  }
  
  private initializeProducts() {
    const products: InsertProduct[] = [
      {
        name: "doTERRA Lavender Essential Oil",
        description: "Known for its calming properties, lavender oil helps reduce anxiety and promotes restful sleep.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        price: "₹2,299"
      },
      {
        name: "doTERRA Peppermint Essential Oil",
        description: "Invigorating peppermint oil boosts energy, improves focus, and aids in digestion.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        price: "₹1,999"
      },
            {
        name: "doTERRA Lemon Essential Oil",
        description: "Doterra lemon oil that purifies the air, elevates mood, and supports healthy digestion.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        price: "₹1,599"
      },
        {
        name: "doTERRA Orange Essential Oil",
        description: "Orange doTerra oil that purifies the air, elevates mood, and supports healthy digestion.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        price: "₹1,599"
      },
       {
        name: "doTERRA lemoneucalyptus Essential Oil",
        description: "This Lemoneucalyptus oil that purifies the air, elevates mood, and supports healthy digestion.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        price: "₹1,599"
      },
      {
        name: "Serenity Blend",
        description: "A proprietary blend designed to promote relaxation and create a peaceful environment.",
        image: "https://images-cdn.ubuy.co.in/668315f1fcc418300348b531-anti-stress-mix-alcohol-free-extract.jpg",
        price: "₹2,699"
      },
      {
        name: "Beginner's Wellness Kit",
        description: "A curated collection of essential oils to start your journey to wellness and healing.",
        image: "https://giftenmarket.com/cdn/shop/files/mindfulness-gift-box-giften-market-4.jpg",
        price: "₹7,299"
      },
      {
        name: "Crystals",
        description: "Crystal healing is a gentle, holistic therapy that harnesses the natural vibrational energies of crystals to support emotional, physical, and spiritual well-being. Each crystal holds unique properties that interact with the body's energy field to restore balance, clear blockages, and promote inner harmony.",
        image: "https://hips.hearstapps.com/hmg-prod/images/crystals-1649247627.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
        price: "₹1,299"
      },
      {
        name: "Seven Chakra Bracelets",
        description: "This Bracelet supports emotional clarity, spiritual awakening, and overall balance. Ideal for meditation, stress relief, or daily grounding, this bracelet helps harmonize your inner energies and encourages a sense of centered well-being.",
        image: "https://crystaldivine.in/wp-content/uploads/2023/08/7-chakra-with-tree-charm-1080x1080.webp",
        price: "₹999"
      },
      {
        name: "Rose quartz Bracelets",
        description: "Rose Quartz Bracelet radiates gentle, nurturing energy that opens the heart chakra. It promotes self-love, emotional healing, and compassion toward others. Perfect for those seeking emotional deeper connections in relationships",
        image: "https://www.whatyoursignsays.com/media/catalog/product/cache/84090973cd141c0a06562cbb8c9b6836/i/m/image_3__1.webp",
        price: "₹999"
      },
      {
        name: "Amethyst Bracelets",
        description: "Amethyst Bracelet is a calming and spiritually protective accessory. Associated with the crown chakra, it enhances intuition, soothes anxiety, and supports restful sleep.",
        image: "https://themiraclehub.in/blog/wp-content/uploads/2024/04/beautiful-bracelet-with-amethyst-selective-focus-1-scaled.jpg",
        price: "₹999"
      },
      {
        name: "Tiger eye crstal bracelet",
        description: "Tiger Eye Bracelet is a grounding stone of strength, courage, and protection. With its rich golden-brown bands, it supports decision-making, confidence, and mental focus.",
        image: "https://www.findgemstone.com/wp-content/uploads/2024/12/Which-Hand-to-Wear-a-Tiger-Eye-Bracelet-For-Female-and-Male.jpg",
        price: "₹999"
      }
    ];
    
    products.forEach(product => {
      this.createProduct(product);
    });
  }
  
  private initializeTestimonials() {
    const testimonials: InsertTestimonial[] = [
      {
        text: "The sound healing session was unlike anything I've experienced before. The vibrations seemed to wash away my stress, leaving me feeling deeply relaxed and renewed. Sarah has an incredible gift.",
        name: "Jennifer M.",
        title: "Sound Healing Client",
        initials: "JM"
      },
      {
        text: "I've been using the essential oils from Serene Healing for months now, and they've become an integral part of my daily wellness routine. The quality is exceptional, and the Serenity Blend helps me sleep better than ever.",
        name: "Robert T.",
        title: "Product Customer",
        initials: "RT"
      },
      {
        text: "The crystal healing and mindfulness meditation combo package was exactly what I needed during a particularly stressful time. I've noticed a significant improvement in my anxiety levels and overall sense of wellbeing.",
        name: "Amanda L.",
        title: "Regular Client",
        initials: "AL"
      },
      {
        text: "As someone who was skeptical about holistic healing, I'm now a complete convert. The aromatherapy sessions have helped with my chronic headaches more than any medication ever did.",
        name: "Michael D.",
        title: "Aromatherapy Client",
        initials: "MD"
      },
      {
        text: "Sarah creates such a calming and safe environment. Her mindfulness meditation classes have given me tools I use daily to manage stress and stay present.",
        name: "Olivia W.",
        title: "Meditation Student",
        initials: "OW"
      }
    ];
    
    testimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }
}

export const storage = new MemStorage();
