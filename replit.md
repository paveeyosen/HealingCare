# Serene Healing - Holistic Wellness Website

## Overview

This is a modern React-based wellness website for "Serene Healing" (branded as "Meraki - Soulful Life"). The application serves as a comprehensive platform for a holistic healing practice, offering services like sound healing, crystal healing, aromatherapy, and mindfulness meditation. The website features both a static HTML version and a full-stack React application with database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom purple theme
- **UI Components**: Radix UI components with shadcn/ui styling
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: RESTful API endpoints
- **Validation**: Zod schemas for data validation
- **Session Management**: Express sessions with PostgreSQL store

### Database Schema
The application uses PostgreSQL with the following main tables:
- **users**: User authentication and management
- **services**: Healing services offered (sound healing, crystal healing, etc.)
- **products**: Doterra essential oils catalog
- **testimonials**: Client testimonials and reviews
- **bookings**: Service appointment bookings
- **inquiries**: Contact form submissions

## Key Components

### Core Pages
1. **Home Page**: Landing page with hero section, service overview, and testimonials
2. **Services Page**: Overview of all healing services
3. **Individual Service Pages**: Dedicated pages for each service:
   - Sound Healing (/services/sound-healing)
   - Crystal Healing (/services/crystal-healing)
   - Life Coaching (/services/life-coaching)
   - Fingerprint Analysis (/services/fingerprint-analysis)
   - Counseling Therapy (/services/counseling-therapy)
   - Numerology (/services/numerology)
   - doTERRA Essential Oils (/services/doterra-oils)
4. **Products Page**: Doterra essential oils with WhatsApp ordering
5. **About Page**: Practitioner information and philosophy
6. **Contact Page**: Contact form and business information

### Main Features
- **Service Booking System**: Form-based appointment scheduling with WhatsApp integration
- **Comprehensive Service Pages**: Detailed individual pages for each service with benefits, session types, and FAQs
- **WhatsApp Integration**: Direct product ordering and booking via WhatsApp
- **Testimonial Carousel**: Interactive client testimonials display
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Forms**: Inquiry and booking forms with validation
- **FAQ Sections**: Detailed frequently asked questions for each service

### UI Components
- Custom header with navigation and mobile menu
- Footer with quick links and social media
- Reusable form components with validation
- Toast notifications for user feedback
- Card-based layouts for services and products

## Data Flow

### Client-Server Communication
1. React frontend makes API calls using TanStack Query
2. Express backend handles requests and validates data with Zod
3. Drizzle ORM manages database operations
4. Responses are cached on the client side

### Form Handling
1. React Hook Form manages form state and validation
2. Zod schemas validate data on both client and server
3. Success/error feedback via toast notifications
4. Form submissions trigger API calls to store data

### External Integrations
- **WhatsApp API**: Direct messaging for product orders
- **Font Integration**: Google Fonts (Playfair Display, Poppins)
- **Icon Library**: FontAwesome and React Icons

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Database**: Drizzle ORM, Neon Database connector
- **Validation**: Zod, React Hook Form
- **HTTP Client**: Native fetch with TanStack Query

### Development Tools
- **Build Tools**: Vite, TypeScript, ESBuild
- **CSS Processing**: PostCSS, Autoprefixer
- **Development**: Replit-specific plugins and error handling

## Deployment Strategy

### Production Build
1. Vite builds optimized React bundle
2. ESBuild compiles server-side TypeScript
3. Static assets are served from `/dist/public`
4. Server runs on Express with production optimizations

### Environment Configuration
- **Database**: PostgreSQL via Neon serverless
- **Session Store**: PostgreSQL-based session storage
- **Environment Variables**: Database URL and session secrets

### Development vs Production
- **Development**: Vite dev server with HMR
- **Production**: Express serves static files + API routes
- **Error Handling**: Custom error boundaries and logging

The application follows modern web development best practices with a focus on performance, accessibility, and user experience. The purple theme throughout creates a cohesive healing-focused aesthetic that matches the wellness brand.