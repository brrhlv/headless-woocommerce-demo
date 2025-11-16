import { MOCK_PRODUCTS, MOCK_CATEGORIES } from './mock-data';

// WooCommerce API configuration
const WC_STORE_URL = process.env.NEXT_PUBLIC_WC_STORE_URL || "";
const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || "";
const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || "";

// Check if we should use mock data (when no WooCommerce backend is configured)
const USE_MOCK_DATA = !WC_STORE_URL || WC_STORE_URL === '' || WC_STORE_URL.includes('localhost');

// Helper function to make authenticated API requests
async function wcFetch<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
  const baseUrl = `${WC_STORE_URL}/wp-json/wc/v3`;
  const url = new URL(`${baseUrl}${endpoint}`);

  // Add query parameters
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key].toString());
      }
    });
  }

  // Add authentication
  url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
  url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);

  const response = await fetch(url.toString(), {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    console.error(`WooCommerce API error: ${response.status} ${response.statusText}`);
    throw new Error(`WooCommerce API error: ${response.statusText}`);
  }

  return response.json();
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  images: ProductImage[];
  categories: ProductCategory[];
  tags: ProductTag[];
  stock_status: string;
  stock_quantity: number | null;
  attributes: ProductAttribute[];
}

export interface ProductImage {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ProductTag {
  id: number;
  name: string;
  slug: string;
}

export interface ProductAttribute {
  id: number;
  name: string;
  options: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: {
    src: string;
    alt: string;
  } | null;
  count: number;
}

export interface Order {
  id: number;
  status: string;
  total: string;
  line_items: OrderLineItem[];
  billing: BillingAddress;
  shipping: ShippingAddress;
}

export interface OrderLineItem {
  product_id: number;
  name: string;
  quantity: number;
  total: string;
}

export interface BillingAddress {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface ShippingAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

// Product API methods
export async function getProducts(params?: {
  per_page?: number;
  page?: number;
  category?: number;
  search?: string;
  orderby?: string;
  order?: "asc" | "desc";
}): Promise<Product[]> {
  if (USE_MOCK_DATA) {
    let products = [...MOCK_PRODUCTS] as Product[];

    // Apply filters
    if (params?.category) {
      products = products.filter(p =>
        p.categories.some(c => c.id === params.category)
      );
    }
    if (params?.search) {
      const search = params.search.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
      );
    }

    // Apply pagination
    const perPage = params?.per_page || 10;
    const page = params?.page || 1;
    const start = (page - 1) * perPage;
    return products.slice(start, start + perPage);
  }

  try {
    return await wcFetch<Product[]>("/products", params);
  } catch (error) {
    console.error("Error fetching products:", error);
    return MOCK_PRODUCTS as Product[];
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    return await wcFetch<Product>(`/products/${id}`);
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (USE_MOCK_DATA) {
    const product = MOCK_PRODUCTS.find(p => p.slug === slug);
    return product as Product || null;
  }

  try {
    const products = await wcFetch<Product[]>("/products", { slug });
    return products[0] || null;
  } catch (error) {
    console.error(`Error fetching product by slug ${slug}:`, error);
    const product = MOCK_PRODUCTS.find(p => p.slug === slug);
    return product as Product || null;
  }
}

// Category API methods
export async function getCategories(params?: {
  per_page?: number;
  page?: number;
}): Promise<Category[]> {
  if (USE_MOCK_DATA) {
    return MOCK_CATEGORIES as Category[];
  }

  try {
    return await wcFetch<Category[]>("/products/categories", params);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return MOCK_CATEGORIES as Category[];
  }
}

export async function getCategory(id: number): Promise<Category | null> {
  try {
    return await wcFetch<Category>(`/products/categories/${id}`);
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error);
    return null;
  }
}

// Order API methods
export async function createOrder(orderData: {
  line_items: Array<{ product_id: number; quantity: number }>;
  billing: BillingAddress;
  shipping?: ShippingAddress;
}): Promise<Order | null> {
  try {
    const baseUrl = `${WC_STORE_URL}/wp-json/wc/v3`;
    const url = new URL(`${baseUrl}/orders`);

    url.searchParams.append('consumer_key', WC_CONSUMER_KEY);
    url.searchParams.append('consumer_secret', WC_CONSUMER_SECRET);

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Order creation failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error creating order:", error);
    return null;
  }
}
